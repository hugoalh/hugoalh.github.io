/*==================================================
hugoalh.github.io Website Navigation
	Author
		hugoalh
	Program Language
		JavaScript/ECMAScript 6/7/8
		jQuery 3(.3.1)
==================================================*/
var protocol = location.protocol;
var hostname = location.hostname;
var navigation_left_mode;
var needloadpage_parameter;

/*Navigation Left Control*/
function navigation_left_open() {
	document.getElementById("navigation_left").style.left = "0px";
	document.getElementById("blur").style.display = "block";
	document.getElementById("navigation_left_button").setAttribute("onClick","javascript:navigation_left_close();");
	navigation_left_mode = 1;
};
function navigation_left_close() {
	document.getElementById("navigation_left").style.left = "";
	document.getElementById("blur").style.display = "";
	document.getElementById("navigation_left_button").setAttribute("onClick","javascript:navigation_left_open();");
	navigation_left_mode = 0;
};
function navigation_triggerloadpage(needloadpage_parameter) {
	var needloadpageurl = protocol + hostname + needloadpage_parameter;
	history.pushState("", "hugoalh", needloadpageurl);
	website_pageparameter_get();
}

/*Determine Device Event*/
function navigation_deviceevent() {
	var device_resolution_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (device_resolution_width >= 896 && navigation_left_mode == 1) {
		navigation_left_close();
	};
};
window.addEventListener("resize", navigation_deviceevent);

/*Website Page Parameter Handle*/
function website_pageparameter_get() {
	var browser_url_pageparameter_get = new URLSearchParams(location.search.substring(1));
	browser_url_pageparameter_get = browser_url_pageparameter_get.get("page");
	website_pageparameter_load(browser_url_pageparameter_get);
};
function website_pageparameter_load(browser_url_pageparameter) {
	var pageparameter;
	if (browser_url_pageparameter == null || browser_url_pageparameter == "404") {
		pageparameter = "homepage";
	} else {
		pageparameter = browser_url_pageparameter;
	};
	var pageparameter_encode = "#navigation_left #menu a[href='/?page=" + pageparameter + "']";
	$("#navigation_left #menu a").removeClass("navigation_currentpage");
	$(pageparameter_encode).addClass("navigation_currentpage");
	pageparameter = pageparameter.replace(/,/g, "/");
	pageparameter = pageparameter.replace(/\2c /g, "/");
	page_needload = "/page/" + pageparameter + ".html-embed";
	$("#page").load(page_needload, function(response, status, xhr) {
		if (status == "error") {
			$("#page").load("/page/404.html-embed");
		}
	});
}

/*Load Data*/
$(function() {
		$("#navigation_top").load("/navigation/top.html-embed");
		$("#navigation_left").load("/navigation/left.html-embed", function(response, status, xhr) {
			if (status == "success") {
				website_pageparameter_get();
				document.getElementById("blur").addEventListener("click", navigation_left_close);
				$("#navigation_left #menu a").click(function(event) {
					event.preventDefault();
					needloadpage_parameter = this.getAttribute("href");
					navigation_triggerloadpage(needloadpage_parameter);
					navigation_left_close();
				});
				$("#coverscreen").css("display","none");
			}
		});
	}
);
