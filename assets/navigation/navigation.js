/*==================================================================================================
hugoalh's Website Navigation Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7, jQuery 2(.2.4)/3(.3.1)
==================================================================================================*/
/*Navigation Left Control*/
	function navigation_left_open()
	{
		document.getElementById("navigation_left").style.width = "100%";
		document.getElementById("page").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_close();"
	};
	function navigation_left_close()
	{
		document.getElementById("navigation_left").style.width = null;
		document.getElementById("page").style.backgroundColor = null;
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_open();"
	};

/*Load Navigation*/
	$(document).ready(function()
		{
			$("#navigation_top").load("/assets/navigation/data_top.embedhtml");
			$("#navigation_left").load("/assets/navigation/data_left.embedhtml");
		}
	);
