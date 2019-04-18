/*==========
hugoalh.github.io Service Worker Register
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
	Source
		https://www.pwabuilder.com/serviceworker
		https://jakearchibald.com/2014/offline-cookbook
==========*/
if (navigator.serviceWorker.controller) {
	console.log("[hugoalh.github.io Service Worker] Found actived service worker, skipped register process.");
} else {
	/*Register Service Worker*/
	navigator.serviceWorker.register("/progressivewebapplication/serviceworker.js", {scope: "/"}).then(function(reg) {
		console.log("[hugoalh.github.io Service Worker] Service worker registered for scope: "+ reg.scope);
	});
};
