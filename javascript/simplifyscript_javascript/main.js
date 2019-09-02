/*
Simplify Script - JavaScript - Main
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 5
*/
const SimplifyScript_JavaScript = (function() {
	let LibraryVersion = "0.0.1";
	return {
		/* Core */
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
		/* Browser Module */
			BrowserStorage: import("./module/browserstorage.js")
	};
})();

/* Library NodeJS Module */

/* Add Alias */
const SSJS = SimplifyScript_JavaScript;
