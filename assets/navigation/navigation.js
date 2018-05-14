/*==================================================================================================
hugoalh's Website Navigation Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7, jQuery 1(.12.4)/2(.2.4)/3(.3.1)
==================================================================================================*/
/*Navigation Left Control*/
	function navigation_left_open() {
		document.getElementById("navigation_left").style.width = "100%";
		document.getElementById("page").style.backgroundColor = "rgba(0, 0, 0, 0.25)";
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_close();"
	};
	function navigation_left_close() {
		document.getElementById("navigation_left").style.width = "0px";
		document.getElementById("page").style.backgroundColor = "rgba(0, 0, 0, 0)";
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_open();"
	};

/*Load Navigation*/
	$(document).ready(function(){
		$("#navigation_top").load("/assets/navigation/data_top.embedhtml");
		$("#navigation_left").load("/assets/navigation/data_left.embedhtml");
	});
