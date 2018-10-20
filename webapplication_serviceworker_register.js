/*==================================================
Web Application - Service Worker - Register
	Author
		hugoalh
	Program Language
		JavaScript/ECMAScript 6/7/8
	Source
		https://www.pwabuilder.com/serviceworker
		https://jakearchibald.com/2014/offline-cookbook
==================================================*/
if (navigator.serviceWorker.controller) {
	console.log("[hugoalh.github.io Web Application - Service Worker - Register] Found actived service worker, skipped register process.");
} else {
	/*Register Service Worker*/
		navigator.serviceWorker.register("/webapplication_serviceworker.js", {scope: "/"}).then(function(reg) {
				console.log("[hugoalh.github.io Web Application - Service Worker - Register] Service worker registered for scope: "+ reg.scope);
			}
		);
};
