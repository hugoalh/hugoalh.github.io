/*==============================================================================
hugoalh.github.io - Service Worker - Register
	Author:
		hugoalh
	Language:
		JavaScript 5
==============================================================================*/
if ("serviceWorker" in navigator) {
	if (navigator.serviceWorker.controller) {
		console.log("%cService Worker", "font-weight: bold", "\n" + "Active service worker found, no need to register.");
	} else {
		/* Register */
		navigator.serviceWorker
			.register("/serviceworker.js", {
				scope: "./"
			})
			.then(function (reg) {
				console.log("%cService Worker", "font-weight: bold", "\n" + "Service worker has been registered for scope " + reg.scope + ".");
			});
	};
};
