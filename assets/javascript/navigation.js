/*
==================================================
hugoalh Website Navigation Toolkit
Author:	hugoalh
API:	JavaScript (ECMAScript 6/7), Cookie
==================================================
*/

/* Navigation Control */
function navigation_open_standard() {
	document.getElementById("navigation_left").style.width = "384px";
	document.getElementById("body_content").style.marginLeft = "384px";
	cookie_set(setting_navigation, 1, 7);
};

function navigation_open_mobile() {
	document.getElementById("navigation_left").style.width = "100%";
};

function navigation_close() {
	document.getElementById("navigation_left").style.width = "0px";
	document.getElementById("body_content").style.marginLeft = "0px";
	cookie_set(setting_navigation, 0, 7);
};

var setting_navigation = cookie_get("setting_navigation");
if (setting_navigation == 0) {
	navigation_close();
} else {
	
