/*
hugoalh.github.io Navigation
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
		jQuery 3(.4.1)
*/
try {
	import SSJS from "./simplifyscript_javascript/main.js";
} catch(Error) {};

var BrowserInformation = {
	"Name": "",
	"Agent": navigator.userAgent,
	"Language": (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage).toLowerCase(),
	"Screen": {
		"Width": (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
		"Height": (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),
		"Direction": ""
	}
};
/* Determine browser name */
	if (BrowserInformation.Agent.indexOf("Firefox") > -1) {
		BrowserInformation.Name = "Mozilla Firefox";
	} else if (BrowserInformation.Agent.indexOf("Opera") > -1 || BrowserInformation.Agent.indexOf("OPR") > -1) {
		BrowserInformation.Name = "Opera";
	} else if (BrowserInformation.Agent.indexOf("Trident") > -1) {
		BrowserInformation.Name = "Microsoft Internet Explorer";
	} else if (BrowserInformation.Agent.indexOf("Edge") > -1) {
		BrowserInformation.Name = "Microsoft Edge";
	} else if (BrowserInformation.Agent.indexOf("Chrome") > -1) {
		BrowserInformation.Name = "Google Chrome";
	} else if (BrowserInformation.Agent.indexOf("Safari") > -1) {
		BrowserInformation.Name = "Apple Safari";
	} else {
		BrowserInformation.Name = "Unknown";
	}

/* Determine browser screen direction */
	if (BrowserInformation.Screen.Width > BrowserInformation.Screen.Height) {
		BrowserInformation.Screen.Direction = "Landscape";
	} else if (BrowserInformation.Screen.Width < BrowserInformation.Screen.Height) {
		BrowserInformation.Screen.Direction = "Portrait";
	} else {
		BrowserInformation.Screen.Direction = "Square";
	}

var Navigation_Left_Visible;

/* Handle navigation left */
	/* Blur */
		$("#blur").click(function () {
			Navigation_Left_Close();
		});
	/* Open */
		function Navigation_Left_Open() {
			document.getElementById("navigation_left").style.left = "0px";
			document.getElementById("blur").style.display = "block";
			document.getElementById("navigation_left_button").setAttribute("onClick", "javascript:Navigation_Left_Close();");
			Navigation_Left_Visible = true;
		};
	/* Close */
		function Navigation_Left_Close() {
			document.getElementById("navigation_left").style.left = "";
			document.getElementById("blur").style.display = "";
			document.getElementById("navigation_left_button").setAttribute("onClick", "javascript:Navigation_Left_Open();");
			Navigation_Left_Visible = false;
		};

/* Event to determine device resize */
	window.addEventListener("resize", function () {
		BrowserInformation.Screen.Width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		if (BrowserInformation.Screen.Width >= 896 && Navigation_Left_Visible == true) {
			Navigation_Left_Close();
		};
	});

/* Handle device URL parameter */
	/* Parse URL parameter */
		function website_urlpageparameter_get() {
			var urlpageparameter_get = new URLSearchParams(location.search.substring(1));
			urlpageparameter_get = urlpageparameter_get.get("page");
			website_urlpageparameter_load(urlpageparameter_get);
		};
	/* Handle page */
		function website_urlpageparameter_load(urlpageparameter) {
			if (urlpageparameter == null || urlpageparameter == "homepage" || urlpageparameter == "404") {
				urlpageparameter = "homepage";
				history.replaceState("", "hugoalh", "/");
			};
			var urlpageparameter_encode = "#navigation_left #menu a[href='/?page=" + urlpageparameter + "']";
			$("#navigation_left #menu a").removeClass("navigation_currentpage");
			$(urlpageparameter_encode).addClass("navigation_currentpage");
			urlpageparameter = urlpageparameter.replace(/,/g, "/");
			urlpageparameter = urlpageparameter.replace(/\2c /g, "/");
			var page_needload = "/page/" + urlpageparameter + ".html-embed";
			$("#page").load(page_needload, function (response, status, xhr) {
				if (status == "error" || status == "timeout" || status == "abort" || status == "parsererror") {
					$("#page").load("/page/404.html-embed");
				};
			}).scrollTop(0);
		};
	/* Event to determine device URL change */
		window.onpopstate = function () {
			website_urlpageparameter_get();
		};

/* Load navigation */
	website_urlpageparameter_get();
	$("#navigation_left #menu a").click(function (event) {
		event.preventDefault();// Prevent browser to execute default action
		var self_href = this.getAttribute("href");
		history.pushState("", "hugoalh", self_href);
		website_urlpageparameter_get();
		Navigation_Left_Close();
	});
	document.addEventListener('DOMContentLoaded', (event) => {
		document.getElementById("initialscreen").style.display = "none";
		$("#initialscreen").remove();
	});
