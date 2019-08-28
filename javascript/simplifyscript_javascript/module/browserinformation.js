/*
Simplify Script - JavaScript - Browser Information
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
const BrowserInformation = {};
let Agent = navigator.userAgent;
let Language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage).toLowerCase();
let Device;
let OperatingSystem;
let DataList = {
	"Bot": [
		"bot",
		"Bot",
		"BOT",
		"generator",
		"Generator",
		"http://",
		"https://",
		".com",
		".net",
		"Google Web Preview",
		"Google Page Speed Insight",
		"BingPreview",
		"crawler",
		"Crawler"
	]
};

/* Determine bot */
for (let index = 0; index < DataList.Bot.length; index++) {
	if (Agent.search(DataList.Bot[index]) != -1) {
		Device = "Bot";
	};
};
BrowserInformation.Device.IsBot = function() {
	if (Device == "Bot") {
		return true;
	} else {
		return false;
	};
};

export { BrowserInformation };
