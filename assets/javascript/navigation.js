/*
====================================================================================================
hugoalh's Website Navigation Tool Set
Author:		hugoalh
API:		JavaScript (ECMAScript 6/7)
====================================================================================================
*/

/* Navigation Control */
function navigation_left_open_mobile() {
	document.getElementById("navigation_left").style.width = "100%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
};

function navigation_left_close_mobile() {
	document.getElementById("navigation_left").style.width = "0px";
	document.body.style.backgroundColor = "rgba(0,0,0,0)";
};
