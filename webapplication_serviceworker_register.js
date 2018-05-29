/*==================================================================================================
Web Application - Service Worker - Register
Branch:					Cache-First Network
Author:					hugoalh
Source:					https://www.pwabuilder.com/serviceworker
Programming Language:	JavaScript/ECMAScript 6/7/8
==================================================================================================*/
if (navigator.serviceWorker.controller) {
	console.log("[hugoalh.github.io Web Application - Service Worker - Register] Actived service worker was found, unnecessary to register again.")
} else {
	/*Register The Service Worker*/
		navigator.serviceWorker.register("/webapplication_serviceworker.js", {scope: "/"}).then(function(reg) {
				console.log("[hugoalh.github.io Web Application - Service Worker - Register] Service worker has registered for scope: "+ reg.scope);
			}
		);
};
