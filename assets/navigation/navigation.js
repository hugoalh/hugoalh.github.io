/*==================================================================================================
hugoalh's Website Navigation Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7
==================================================================================================*/
/*Navigation Control*/
	function navigation_left_open() {
		document.getElementById("navigation_left").style.width = "100%";
		document.getElementById("page").style.backgroundColor = "rgba(0, 0, 0, 0.25)";
	};
	function navigation_left_close() {
		document.getElementById("navigation_left").style.width = "0px";
		document.getElementById("page").style.backgroundColor = "rgba(0, 0, 0, 0)";
	};
