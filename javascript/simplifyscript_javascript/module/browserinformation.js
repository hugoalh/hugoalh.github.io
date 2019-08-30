/*
Simplify Script - JavaScript - Browser Information
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
/* Define Module Index */
	const BrowserInformation = {};

/* Data */
	let Agent = navigator.userAgent;
	let Device;
	let OperatingSystem;
	let BrandName;
	let Language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage).toLowerCase();
	let QueryList_BotAgent = [
		"bot",
		"generator",
		"http://",
		"https://",
		".com",
		".net",
		".io",
		"preview",
		"crawler",
		"google page speed insight"
	];

/* Determine Device */
	for (index = 0; index < QueryList_BotAgent.length; index++) {
		if (Agent.toLowerCase().search(QueryList_BotAgent[index]) != -1) {
			Device = "Bot";
		};
	};
	if (Device != "Bot") {
		if (Agent.search("TV") != -1) {
			Device = "Television";
		};
	};

/* Determine Browser Brand Name */
	if (Device == "Bot") {
		BrandName = "Bot";
	} else {
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
		};
	};

BrowserInformation.Agent = function(Query = null) {
	if (Query == null) {
		return Agent;
	};
};
BrowserInformation.Device = function(Query = null) {
	if (Query == null) {
		return Device;
	} else if (Device.search(Query) != -1) {
		return true;
	} else {
		return false;
	};
};

/* Package Module */
export {
	BrowserInformation
};
