/*
Simplify Script - JavaScript - Browser Information
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
const BrowserInformation = {};
let Agent = navigator.userAgent;
let BrandName;
let Language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage).toLowerCase();
let Device;
let OperatingSystem;
let DataList = {
	"Bot": [
		"bot",
		"generator",
		"http://",
		"https://",
		".com",
		".net",
		"google web preview",
		"google page speed insight",
		"bingpreview",
		"crawler"
	]
};

/* Determine browser brand name */
if (Agent.indexOf("Firefox") != -1) {
	BrandName = "Mozilla Firefox";
} else if (Agent.indexOf("Opera") != -1 || Agent.indexOf("OPR") != -1) {
	BrandName = "Opera";
} else if (Agent.indexOf("MSIE") != -1 || Agent.indexOf("Trident") != -1) {
	BrandName = "Microsoft Internet Explorer";
} else if (Agent.indexOf("Edge") != -1) {
	BrandName = "Microsoft Edge";
} else if (Agent.indexOf("Chrome") != -1) {
	BrandName = "Google Chrome";
} else if (Agent.indexOf("Safari") != -1) {
	BrandName = "Apple Safari";
} else {
	BrandName = "Unknown";
}

/* Determine bot */
for (let index = 0; index < DataList.Bot.length; index++) {
	if (Agent.toLowerCase().search(DataList.Bot[index]) != -1) {
		Device = "Bot";
	};
};

BrowserInformation.Agent = function(index = null) {
	if (index == null) {
		return Agent;
	};
};
BrowserInformation.Device = function(index = null) {
	if (index == null) {
		return Device;
	} else if (Device.search(index) != -1) {
		return true;
	} else {
		return false;
	};
};

export { BrowserInformation };
