/*
Service Worker - Register
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
if (navigator.serviceWorker.controller) {
	console.info("%c[Service Worker] ", "font-weight: bold", "Already actived, skipped register process.");
} else {
	/*Register*/
		navigator.serviceWorker.register("/serviceworker.js", {scope: "/"}).then(function(reg) {
			console.info("%c[Service Worker] ", "font-weight: bold", "Registered for scope: "+ reg.scope);
		});
};
