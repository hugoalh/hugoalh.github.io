/*==================
hugoalh.github.io - Service Worker
	Author:
		hugoalh
	Language:
		JavaScript 5
==================*/
const CacheBaseName = "ServiceWorkerCache";
const PreCacheFile = [
	/* Array of files to precache */
];
const OfflineFallbackPage = "/offline.html";
const NetworkFirstPath = [
	/* Array of regex of paths that should go network first */
	// Example: /\/api\/.*/
	"/\/*/"
];
const AvoidCachePath = [
	/* Array of regex of paths that should not be cached */
	// Example: /\/api\/.*/
];

function PathComparer(requestUrl, pathRegEx) {
	return requestUrl.match(new RegExp(pathRegEx, "u"));
};

function ComparePath(requestUrl, pathsArray) {
	if (requestUrl) {
		for (let index = 0; index < pathsArray.length; index++) {
			if (PathComparer(requestUrl, pathsArray[index])) {
				return true;
			};
		};
	};
	return false;
};

function CacheFirstFetch(event) {
	event.respondWith(
		FromCache(event.request).then((response) => {
			/* The response was found in the cache so we responde with it and update the entry; This is where we call the server to get the newest version of the file to use the next time we show view */
			event.waitUntil(
				fetch(event.request).then((response) => {
					return UpdateCache(event.request, response);
				})
			);
			return response;
		},
		() => {
			/* The response was not found in the cache so we look for it on the server */
			return fetch(event.request)
				.then((response) => {
					/* If request was success, add or update it in the cache */
					event.waitUntil(UpdateCache(event.request, response.clone()));
					return response;
				})
				.catch((error) => {
					/* The following validates that the request was for a navigation to a new document */
					if (event.request.destination !== "document" || event.request.mode !== "navigate") {
						return;
					};
					console.log(`[hugoalh.github.io - Service Worker] Network request failed and no cache. ${error}`);
					/* Use the precached offline page as fallback */
					return caches.open(CacheBaseName).then((cache) => {
						cache.match(OfflineFallbackPage);
					});
				});
		}
		)
	);
};

function NetworkFirstFetch(event) {
	event.respondWith(
		fetch(event.request)
		.then((response) => {
				/* If request was success, add or update it in the cache */
				event.waitUntil(
					UpdateCache(event.request, response.clone())
				);
				return response;
			})
			.catch((error) => {
				console.log(`[hugoalh.github.io - Service Worker] Network request failed. Serving content from cache: ${error}`);
				return FromCache(event.request);
			})
	);
};

function FromCache(request) {
	/* Check to see if you have it in the cache, return response; If not in the cache, then return error page */
	return caches.open(CacheBaseName).then((cache) => {
		return cache.match(request).then((matching) => {
			if (!matching || matching.status === 404) {
				return Promise.reject("no-match");
			};
			return matching;
		});
	});
};

function UpdateCache(request, response) {
	if (!ComparePath(request.url, AvoidCachePath)) {
		return caches.open(CacheBaseName).then((cache) => {
			return cache.put(request, response);
		});
	};
	return Promise.resolve();
};

self.addEventListener(
	"install",
	(event) => {
		console.log(`[hugoalh.github.io - Service Worker] Install event processing. Skip waiting on install.`);
		self.skipWaiting();
		event.waitUntil(
			caches.open(CacheBaseName).then((cache) => {
				console.log(`[hugoalh.github.io - Service Worker] Caching pages during install.`);
				return cache.addAll(PreCacheFile).then(() => {
					return cache.add(OfflineFallbackPage);
				});
			})
		);
	}
);

/* Allow service worker to control of current page */
self.addEventListener(
	"activate",
	(event) => {
		console.log(`[hugoalh.github.io - Service Worker] Claiming client for current page.`);
		event.waitUntil(self.clients.claim());
	}
);

/* If any fetch fails, it will look for the request in the cache and serve it from there first */
self.addEventListener(
	"fetch",
	(event) => {
		if (event.request.method !== "GET") {
			return;
		};
		if (ComparePath(event.request.url, NetworkFirstPath)) {
			NetworkFirstFetch(event);
		} else {
			CacheFirstFetch(event);
		};
	}
);
