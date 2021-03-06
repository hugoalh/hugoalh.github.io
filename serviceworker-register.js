/*==================
hugoalh.github.io - Service Worker - Register
	Language:
		JavaScript 5
==================*/
if ("serviceWorker" in navigator) {
	if (navigator.serviceWorker.controller) {
		console.log(`[hugoalh.github.io - Service Worker - Register] Active service worker found, no need to register.`);
	} else {
		/* Register */
		navigator.serviceWorker.register("/serviceworker.js",
			{
				scope: "/"
			}
		).then((reg) => {
			console.log(`[hugoalh.github.io - Service Worker - Register] Service worker has been registered for scope ${reg.scope}.`);
		});
	};
};
