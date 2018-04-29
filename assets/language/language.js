/*
==================================================
Name: Website Language Extension
Author: hugoalh
==================================================
*/

/* Function, Replace Language String */
var translate = function (jsdata) {
	$("[languagestring]").each (function (index) {
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

/* Function, Cookie, Data, Set */
function cookie_data_set(cookie_datasection_name, cookie_datasection_value) {
	var cookie_time_expire = new Date();
	cookie_time_expire.setTime(cookie_time_expire.getTime() + (365.25 * 24 * 60 * 60 * 1000));
	var cookie_time_expire_utc = cookie_time_expire.toUTCString();
	document.cookie = cookie_datasection_name + "=" + cookie_datasection_value + ";expires=" + cookie_time_expire_utc + ";domain=hugoalh.github.io";
};
/*
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
*/

/* Function, Cookie, Data, Get */
function cookie_data_get(cookie_datasection_name) {
	var cookie_datasection_name_search = cookie_datasection_name + "=";
	var cookie_decode = decodeURIComponent(document.cookie);
	var cookie_array = cookie_decode.split(';');
	for(var i = 0; i < cookie_array.length; i++) {
		var c = cookie_array[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		};
		if (c.indexOf(cookie_datasection_name_search) == 0) {
			return c.substring(cookie_datasection_name_search.length, c.length);
		}
	};
	return "";
};

/* Check Client Setted Language Code */
var language_setted_check = cookie_data_get("language_setted");
if (/*language_setted_check = "" || language_setted_check = null || */language_setted_check = "undefined") {
	/* Get Client Language Code */
	var language_detect = navigator.language.toLowerCase();
	if (language_detect == "undefined") {
		var language_detect = navigator.browserLanguage.toLowerCase();
		if (language_detect == "undefined") {
			var language_detect = navigator.userLanguage.toLowerCase();
			if (language_detect == "undefined") {
				var language_detect = navigator.systemLanguage.toLowerCase();
			}
		}
	};
	/* Redirect Language Code */
	if (language_detect == "zh-hk" || language_detect == "zh-mo" || language_detect == "zh-sg" || language_detect == "zh-tw" || language_detect == "zh-hant" ) {
		var language_setted = "zh";
	};
	if (language_detect == "zh-cn" || language_detect == "zh-hans" ) {
		var language_setted = "zhs";
	}
};

/* Get Language String In JSON */
if (language_setted == "zh" ) {
	$.getJSON("assets/language/zh.json", translate);
	cookie_data_set("language_setted", "zh");
};
if (language_setted == "zhs" ) {
	$.getJSON("assets/language/zhs.json", translate);
	cookie_data_set("language_setted", "zhs");
};
if (language_setted != "zh" && language_set != "zhs") {
	$.getJSON("assets/language/en.json", translate);
	cookie_data_set("language_setted", "en");
}
