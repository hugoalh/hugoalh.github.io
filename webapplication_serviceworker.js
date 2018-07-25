/*==================================================================================================
Web Application - Service Worker
Author:				hugoalh
Program Language:	JavaScript/ECMAScript 6/7/8
Source:				https://www.pwabuilder.com/serviceworker, https://jakearchibald.com/2014/offline-cookbook
==================================================================================================*/
var cache_name = "webapplication_serviceworker_cache";
var cache_filelist = [
	"/"
];

/*Install stage sets up the cache-array to configure pre-cache content*/
	self.addEventListener("install", function(evt) {
			console.log("[hugoalh.github.io Web Application - Service Worker] Service worker is installed.");
			evt.waitUntil(precache().then(function() {
						console.log("[hugoalh.github.io Web Application - Service Worker] Skip waiting on install.");
						return self.skipWaiting();
					}
				)
			);
		}
	);

/*Allow service worker to control of current page*/
	self.addEventListener("activate", function(event) {
		console.log("[hugoalh.github.io Web Application - Service Worker] Claiming client for current page.");
		return self.clients.claim();
		}
	);
	self.addEventListener("fetch", function(evt) {
		console.log("[hugoalh.github.io Web Application - Service Worker] Service worker is serving the asset: "+ evt.request.url);
		evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
		evt.waitUntil(update(evt.request));
		}
	);
	function precache() {
		return caches.open(cache_name).then(function (cache) {
				return cache.addAll(cache_filelist);
			}
		);
	};
	function fromCache(request) {
		/*Pull files from the cache first thing to show them fast*/
			return caches.open(cache_name).then(function (cache) {
				return cache.match(request).then(function (matching) {
						return matching || Promise.reject("no-match");
					}
				);
			}
		);
	};
	function update(request) {
		/*Call the server to get the newest version of the file to use the next time of show view*/
		return caches.open(cache_name).then(function (cache) {
				return fetch(request).then(function (response) {
						return cache.put(request, response);
					}
				);
			}
		);
	};
	function fromServer(request) {
		/*Fallback if it is not in the cahche to go to the server and get it*/
		return fetch(request).then(function(response){return response})
	};
