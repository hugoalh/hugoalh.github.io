/*================
hugoalh.github.io Navigation
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 5
		jQuery 3(.4.1)
================*/
var BrowserInformation = {
	"Screen": {
		"Width": (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
		"Height": (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
	}
};

var Navigation_Visible;

/* Handle navigation */
	/* Blur */
	$("#blur").click(function () {
		Navigation_Close();
	});
	/* Open */
	function Navigation_Open() {
		document.getElementById("navigation").style.left = "0px";
		document.getElementById("blur").style.display = "block";
		document.getElementById("navigation_button").setAttribute("onClick", "javascript:Navigation_Close();");
		Navigation_Visible = true;
	};
	/* Close */
	function Navigation_Close() {
		document.getElementById("navigation").style.left = "";
		document.getElementById("blur").style.display = "";
		document.getElementById("navigation_button").setAttribute("onClick", "javascript:Navigation_Open();");
		Navigation_Visible = false;
	};

/* Event to determine device resize */
window.addEventListener("resize", function () {
	BrowserInformation.Screen.Width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
	if (BrowserInformation.Screen.Width >= 896 && Navigation_Visible == true) {
		Navigation_Close();
	};
});

/* Handle device URL parameter */
	/* Handle page */
	function website_urlpageparameter_load(urlpageparameter) {
		if (urlpageparameter === null || urlpageparameter == "homepage" || urlpageparameter == "/") {
			history.replaceState("", "hugoalh", "/");
		};
		var urlpageparameter_encode = "#navigation #menu a[href=\"" + urlpageparameter + "\"]";
		$("#navigation #menu a").removeClass("navigation_currentpage");
		$(urlpageparameter_encode).addClass("navigation_currentpage");
		$("#page").load(urlpageparameter + " #content", function (response, status, xhr) {
			if (status == "error" || status == "timeout" || status == "abort" || status == "parsererror") {
				$("#page").load("/404 #content");
			};
		}).scrollTop(0);
	};
	/* Event to determine device URL change */
	window.onpopstate = function () {
		website_urlpageparameter_load(location.pathname);
	};

/* Load navigation */
website_urlpageparameter_load(location.pathname);
$("#navigation #menu a").click(function (event) {
	event.preventDefault();// Prevent browser to execute default action
	var self_href = this.getAttribute("href");
	history.pushState("", "hugoalh", self_href);
	website_urlpageparameter_load(location.pathname);
	Navigation_Close();
});
document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById("initialscreen").style.display = "none";
	$("#initialscreen").remove();
});
