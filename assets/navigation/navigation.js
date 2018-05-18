/*==================================================================================================
hugoalh's Website Navigation Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7/8, jQuery 2(.2.4)/3(.3.1)
==================================================================================================*/
var client_resolution_width;
var navigation_left_mode;

/*Control, Left*/
	function navigation_left_open()
	{
		if (client_resolution_width > 256)
		{
			document.getElementById("navigation_left").style.width = "256px";
		} else {
			document.getElementById("navigation_left").style.width = "100%";
		};
		document.getElementById("page").style.backgroundColor = "#0000007F";
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_close();";
		navigation_left_mode = 1;
	};
	function navigation_left_close()
	{
		document.getElementById("navigation_left").style.width = null;
		document.getElementById("page").style.backgroundColor = null;
		document.getElementById("navigation_left_button").href = "javascript:navigation_left_open();";
		navigation_left_mode = 0;
	};

/*Determine Client Resolution Of Width*/
	function navigation_clientevent()
	{
		client_resolution_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (client_resolution_width >= 768 && navigation_left_mode == 1)
		{
			navigation_left_close();
		}
	};
	navigation_clientevent();
	window.addEventListener("resize", navigation_clientevent);

/*Load Data*/
	$(document).ready(function()
		{
			$("#navigation_top").load("/assets/navigation/data_top.embedhtml");
			$("#navigation_left").load("/assets/navigation/data_left.embedhtml");
		}
	);
