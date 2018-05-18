/*==================================================================================================
hugoalh's Website Navigation Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7/8, jQuery 2(.2.4)/3(.3.1)
==================================================================================================*/
/*Determine Client Resolution Of Width*/
	function detect_resolution_width()
	{
		var client_resolution_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	};
	detect_resolution_width();
	document.getElementsByTagName("BODY")[0].onresize = function() {detect_resolution_width()};

/*Navigation Left Control*/
	function navigation_left_open()
	{
		if (client_resolution_width > 256)
		{
			document.getElementById("navigation_left").style.width = "256px";
		} else {
			document.getElementById("navigation_left").style.width = "100%";
		};
		document.getElementById("page").style.backgroundColor = "#7F000000";
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_close();";
	};
	function navigation_left_close()
	{
		document.getElementById("navigation_left").style.width = null;
		document.getElementById("page").style.backgroundColor = null;
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_open();";
	};

/*Load Navigation*/
	$(document).ready(function()
		{
			$("#navigation_top").load("/assets/navigation/data_top.embedhtml");
			$("#navigation_left").load("/assets/navigation/data_left.embedhtml");
		}
	);
