/*==================================================
hugoalh.github.io Website Navigation
	Author
		hugoalh
	Program Language
		JavaScript/ECMAScript 6/7/8
		jQuery 3(.3.1)
==================================================*/
var navigation_left_mode;

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

/*Determine Device Event*/
function navigation_deviceevent() {
	var device_resolution_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (device_resolution_width >= 896 && navigation_left_mode == 1) {
		navigation_left_close();
	};
};
window.addEventListener("resize", navigation_deviceevent);

/*Website Page Parameter Handle*/
function website_urlpageparameter_get() {
	var urlpageparameter_get = new URLSearchParams(location.search.substring(1));
	urlpageparameter_get = urlpageparameter_get.get("page");
	website_urlpageparameter_load(urlpageparameter_get);
};
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
	page_needload = "/page/" + urlpageparameter + ".html-embed";
	$("#page").scrollTop(0).load(page_needload, function(response, status, xhr) {
		if (status == "error") {
			$("#page").scrollTop(0).load("/page/404.html-embed");
		}
	});
}

/*Load Data*/
$(function() {
		$("#navigation_top").load("/navigation/top.html-embed");
		$("#navigation_left").load("/navigation/left.html-embed", function(response, status, xhr) {
			if (status == "success") {
				var websiteversion = $.parseJSON($.getJSON("/package.json"));
				document.getElementById("websiteversion").innerHTML = websiteversion.version;
				website_urlpageparameter_get();
				document.getElementById("blur").addEventListener("click", navigation_left_close);
				$("#navigation_left #menu a").click(function(event) {
					event.preventDefault()/*Prevent browser to execute default thing*/;
					var self_href = this.getAttribute("href");
					history.pushState("", "hugoalh", self_href);
					website_urlpageparameter_get();
					navigation_left_close();
				});
				$("#coverscreen").css("display","none");
			}
		});
	}
);
