/*
Simplify Script - JavaScript - Main
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
/* Define library index */
	const SimplifyScript_JavaScript = {};

/* Library core */
	/* Version */
	let LibraryVersion = "0.0.1";
	SimplifyScript_JavaScript["Version"] = function(VersionSyntax = -1) {
		let loot = LibraryVersion.split(".");
		if (VersionSyntax < -1 || VersionSyntax > 4) {
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
	};

/* Library module */
	SimplifyScript_JavaScript["BrowserStorage"] = import("./module/browserstorage.js");
	SimplifyScript_JavaScript["Math"] = import("./module/math.js");

/* Package library as one module */
	const $SSJS = SimplifyScript_JavaScript
	export {
		SimplifyScript_JavaScript,
		$SSJS
	};
