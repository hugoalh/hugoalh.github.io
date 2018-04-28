/*
==================================================
@hugoalh
==================================================
*/

/* Function, Replace Language String */
var translate = function (jsdata) {
	$("[languagestring]").each (function (index) {
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

/* Function, Cookie, Set */
function cookie_set(cookie_section_name, cookie_section_value) {
	var time_now = new Date();
	var cookie_time_expire = time_now.setTime(time_now.getTime() + (365 * 24 * 60 * 60 * 1000));
	document.cookie = cookie_section_name + "=" + cookie_section_value + ";expires=" + cookie_time_expire.toUTCString() + ";domain=hugoalh.github.com";
};

/* Function, Cookie, Get */
function cookie_get(cookie_section_name) {
	var cookie_section_name_search = cookie_section_name + "=";
	var cookie_decode = decodeURIComponent(document.cookie);
	var cookie_array = cookie_decode.split(';');
	for(var i = 0; i < cookie_array.length; i++) {
		var c = cookie_array[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		};
		if (c.indexOf(cookie_section_name_search) == 0) {
			return c.substring(cookie_section_name_search.length, c.length);
		}
	};
	return "";
};

/* Check Client Setted Language Code */
var language_setted_check = cookie_get("language_setted");
if (language_setted_check = "" || language_setted_check = null || language_setted_check = "undefined") {
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
}


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
};

/* Get Language String In JSON */
if (language_setted == "zh" ) {
	$.getJSON("assets/language/zh.json", translate);
};
if (language_setted == "zhs" ) {
	$.getJSON("assets/language/zhs.json", translate);
};
if (language_setted != "zh" && language_set != "zhs") {
	$.getJSON("assets/language/en.json", translate);
}
