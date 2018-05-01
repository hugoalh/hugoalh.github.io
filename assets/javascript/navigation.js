/*
==================================================
hugoalh Website Navigation Toolkit
Author:	hugoalh
API:	JavaScript (ECMAScript 6/7), Cookie
==================================================
*/

function navigation_open_standard() {
	document.getElementById("navigation_left").style.width = "250px";
	document.getElementById("body_content").style.marginLeft = "250px";
};

function navigation_open_mobile() {
	document.getElementById("navigation_left").style.width = "100%";
};

function navigation_close() {
	document.getElementById("navigation_left").style.width = "0px";
	document.getElementById("body_content").style.marginLeft = "0px";
}
