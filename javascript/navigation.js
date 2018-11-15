/*==================================================
hugoalh Website Navigation Tool
	Author
		hugoalh
	Program Language
		JavaScript/ECMAScript 6/7/8
		jQuery 3(.3.1)
==================================================*/
var client_resolution_width;
var navigation_left_mode;

/*Control, Left*/
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

/*Determine Client Event*/
	function navigation_clientevent() {
		client_resolution_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (client_resolution_width >= 896 && navigation_left_mode == 1) {
			navigation_left_close();
		};
	};
	window.addEventListener("resize", navigation_clientevent);

/*Load Data*/
	$(document).ready(function() {
			$("#navigation_top").load("/navigation/top.html-embed");
			$("#navigation_left").load("/navigation/left.html-embed");
		}
	);
