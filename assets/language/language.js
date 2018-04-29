/*
==================================================
Name:	Website Language Extension
API:	JavaScript (ECMAScript 5/5.1/6/7 + JSON) + jQuery (1.12.4/2.2.4/3.3.1)
Author:	hugoalh
==================================================
*/

/* Replace String */
var translate = function (jsdata) {
	$("[languagestring]").each (function (index) {
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

/* Client Select Change To zh */
function language_change_zh() {
	cookie_data_set("language_setted", "zh");
	location.reload(true);
};

/* Client Select Change To zhs */
function language_change_zhs() {
	cookie_data_set("language_setted", "zhs");
	location.reload(true);
};

/* Client Select Change To en */
function language_change_en() {
	cookie_data_set("language_setted", "en");
	location.reload(true);
};

/* Check Cookie Setted Client Code */
var language_setted = cookie_data_get("language_setted");
if (language_setted != "zh" && language_setted != "zhs" && language_setted != "en") {
	/* Determine Client Code */
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
	/* Redirect Code */
	if (language_detect == "zh-hk" || language_detect == "zh-mo" || language_detect == "zh-sg" || language_detect == "zh-tw" || language_detect == "zh-hant" ) {
		var language_setted = "zh";
	};
	if (language_detect == "zh-cn" || language_detect == "zh-hans" ) {
		var language_setted = "zhs";
	}
};

/* Get String In JSON */
if (language_setted == "zh" ) {
	$.getJSON("assets/language/zh.json", translate);
	cookie_data_set("language_setted", "zh");
};
if (language_setted == "zhs" ) {
	$.getJSON("assets/language/zhs.json", translate);
	cookie_data_set("language_setted", "zhs");
};
if (language_setted != "zh" && language_setted != "zhs") {
	$.getJSON("assets/language/en.json", translate);
	cookie_data_set("language_setted", "en");
}
