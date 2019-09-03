/*
Simplify Script - JavaScript
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 5
		Universal Module Definition
*/
/* Determine a suitable method to load this library */
(function (root, factory) {
	if (typeof define === "function" && define.amd) {
		/* Asynchronous Module Definition. Register as an anonymous module. */
			define([], factory);
	} else if (typeof module === "object" && module.exports) {
		/* NodeJS. Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports, like Node. */
			module.exports = factory();
	} else {
		/* Browser globals (root is window) */
			root.returnExports = factory();
	}
}(typeof self !== "undefined" ? self : this, function () {
/* Just return a value to define the module export. This example returns an object, but the module can return a function as the exported value. */
	return {};
}));

const SSJS = (function() {
	let LibraryVersion = "0.0.1";
	return {
		Version: function(VersionSyntax = -1) {
			let loot = LibraryVersion.split(".");
			if (Number.isInteger(VersionSyntax) != true || VersionSyntax < -1 || VersionSyntax > 4) {
				VersionSyntax = -1;
			};
			switch (VersionSyntax) {
				case -1:
					return LibraryVersion;
					break;
				case 0:
					return loot[0];
					break;
				case 1:
					return loot[1];
					break;
				case 2:
					return loot[2];
					break;
				case 3:
					return loot[0] + "." + loot[1];
					break;
				case 4:
					return loot[1] + "." + loot[2];
					break;
			};
		},
		BrowserStorage: import("./module/browserstorage.js")
	};
})();
return SSJS;
