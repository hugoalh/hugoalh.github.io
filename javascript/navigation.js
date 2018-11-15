/*==================================================
hugoalh.github.io Website Navigation
	Author
		hugoalh
	Program Language
		JavaScript/ECMAScript 6/7/8
		jQuery 3(.3.1)
==================================================*/
var device_resolution_width;
var navigation_left_mode;
var browser_url_pageparameter_get;

/*Navigation Left Control*/
function navigation_left_open() {
	document.getElementById("navigation_left").style.left = "0px";
	document.getElementById("page").style.backgroundColor = "rgba(0,0,0,0.5)";
	document.getElementById("navigation_left_button").setAttribute("onClick","javascript:navigation_left_close();");
	navigation_left_mode = 1;
};
function navigation_left_close() {
	document.getElementById("navigation_left").style.left = null;
	document.getElementById("page").style.backgroundColor = null;
	document.getElementById("navigation_left_button").setAttribute("onClick","javascript:navigation_left_open();");
	navigation_left_mode = 0;
};

/*Determine Device Event*/
function navigation_deviceevent() {
	device_resolution_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (device_resolution_width >= 896 && navigation_left_mode == 1) {
		navigation_left_close();
	};
};
window.addEventListener("resize", navigation_deviceevent);

/*Website Page Parameter Handle*/
function website_pageparameter_load(browser_url_pageparameter) {
	var pageparameter;
	$("#navigation_left #menu a").removeClass("navigation_currentpage");
	if (browser_url_pageparameter == null) {
		pageparameter = "homepage";
	};
	document.getElementById(pageparameter).classList.add("navigation_currentpage");
	navigation_left_close();
	pageparameter = pageparameter.replace(",", "/");
	page_needload = "/page/" + pageparameter + ".html-embed";
	$("#page").load(page_needload, function(response, status, xhr) {
		if (status == "error") {
			$("#page").load("/page/404.html-embed");
		}
	});
}

/*Load Data*/
$(document).ready(function() {
		$("#navigation_top").load("/navigation/top.html-embed");
		$("#navigation_left").load("/navigation/left.html-embed");
		$("#coverscreen").css("display","none");
		browser_url_pageparameter_get = new URLSearchParams(location.search.substring(1));
		browser_url_pageparameter_get = browser_url_pageparameter_get.get("page");
		website_pageparameter_load(browser_url_pageparameter_get);
	}
);
