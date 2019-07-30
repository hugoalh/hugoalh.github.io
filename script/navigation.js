/*========
hugoalh.github.io Navigation
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
		jQuery 3(.4.1)
========*/
var navigation_left_visible;
var website_version;

/*Handle navigation left*/
	/*Blur*/
		$("#blur").click(function() {
			navigation_left_close();
		});
	/*Open*/
		function navigation_left_open() {
			document.getElementById("navigation_left").style.left = "0px";
			document.getElementById("blur").style.display = "block";
			document.getElementById("navigation_left_button").setAttribute("onClick","javascript:navigation_left_close();");
			navigation_left_visible = true;
		};
	/*Close*/
		function navigation_left_close() {
			document.getElementById("navigation_left").style.left = "";
			document.getElementById("blur").style.display = "";
			document.getElementById("navigation_left_button").setAttribute("onClick","javascript:navigation_left_open();");
			navigation_left_visible = false;
		};

/*Event to determine device resize*/
	$(window).resize(function() {
		var device_resolution_width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		if (device_resolution_width >= 896 && navigation_left_visible == true) {
			navigation_left_close();
		};
	});

/*Handle device URL parameter*/
	/*Parse URL parameter*/
		function website_urlpageparameter_get() {
			var urlpageparameter_get = new URLSearchParams(location.search.substring(1));
			urlpageparameter_get = urlpageparameter_get.get("page");
			website_urlpageparameter_load(urlpageparameter_get);
		};
	/*Handle page*/
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
			$("#page").load(page_needload, function(response, status, xhr) {
				if (status == "error" || status == "timeout" || status == "abort" || status == "parsererror") {
					$("#page").load("/page/404.html-embed");
				};
			}).scrollTop(0);
		};
	/*Event to determine device URL change*/
		window.onpopstate = function() {
			website_urlpageparameter_get();
		};

/*Load navigation*/
	website_urlpageparameter_get();
	$("#navigation_left #menu a").click(function(event) {
		event.preventDefault();/*Prevent browser to execute default action*/
		var self_href = this.getAttribute("href");
		history.pushState("", "hugoalh", self_href);
		website_urlpageparameter_get();
		navigation_left_close();
	});
	document.addEventListener("load", () => {
		document.getElementById("initialscreen").style.display = "none";
		$("#initialscreen").remove();
  });
