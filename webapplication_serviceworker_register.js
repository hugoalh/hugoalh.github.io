/*==================================================================================================
Web Application - Service Worker - Register
Author:					hugoalh
Source:					https://www.pwabuilder.com/serviceworker
Programming Language:	JavaScript/ECMAScript 6/7/8
==================================================================================================*/
if (navigator.serviceWorker.controller) {
	console.log("[hugoalh.github.io Web Application - Service Worker - Register] Found actived service worker, skipped register process.");
} else {
	/*Register The Service Worker*/
		navigator.serviceWorker.register("/webapplication_serviceworker.js", {scope: "/"}).then(function(reg) {
				console.log("[hugoalh.github.io Web Application - Service Worker - Register] Service worker registered for scope: "+ reg.scope);
			}
		);
};
