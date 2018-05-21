/*==================================================================================================
Progressive Web App - Service Worker - Register
Variable:				Cache-First Network
Author:					hugoalh
Source:					https://www.pwabuilder.com/serviceworker
Programming Language:	JavaScript/ECMAScript 6/7/8
==================================================================================================*/
if (navigator.serviceWorker.controller)
{
	console.log("[hugoalh.github.io Progressive Web App - Service Worker - Register] Actived service worker was found, unnecessary to register again.")
} else {
	/*Register the Service Worker*/
	navigator.serviceWorker.register("/pwa_serviceworker.js", {scope: './'}).then(function(reg)
		{
			console.log("[hugoalh.github.io Progressive Web App - Service Worker - Register] Service worker has registered for scope: " + reg.scope);
		}
	);
};
