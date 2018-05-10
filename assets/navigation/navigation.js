/*
====================================================================================================
hugoalh's Website Navigation Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7
====================================================================================================
*/

/* Navigation Control */
function navigation_left_mobile_open() {
	document.getElementById("navigation_left").style.width = "100%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
};

function navigation_left_mobile_close() {
	document.getElementById("navigation_left").style.width = "0px";
	document.body.style.backgroundColor = "rgba(0,0,0,0)";
};
