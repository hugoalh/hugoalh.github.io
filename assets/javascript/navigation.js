/*
====================================================================================================
hugoalh's Website Navigation Tool Set
Author:		hugoalh
API:		JavaScript (ECMAScript 6/7)
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

document.getElementById("navigation_top").innerHTML = "
	<a class=\"buttonmetroize\" id=\"navigation_left_button\" href=\"/\"><i class=\"googlematerialicon googlematerialicon_24px googlematerialicon_light\">menu</i></a>
	<div id=\"navigation_websitelogo\">
		<img class=\"logo_website_navigation\" src=\"assets/logo/hugoalh_tile.svg\" />
	</div>
	<div id=\"navigaion_top_toolbox\">
		<a class=\"buttonmetroize\"  href=\"/\"><i class=\"googlematerialicon googlematerialicon_24px googlematerialicon_light\">translate</i></a>
	</div>
";
