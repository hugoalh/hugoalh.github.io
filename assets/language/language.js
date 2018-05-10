/*
====================================================================================================
hugoalh's Website Language Extension
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7, JSON, jQuery 1(.12.4)/2(.2.4)/3(.3.1), Cookie
====================================================================================================
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
	cookie_set("setting_language", "zh", 365.25);
	location.reload(true);
};

/* Client Select Change To zhs */
function language_change_zhs() {
	cookie_set("setting_language", "zhs", 365.25);
	location.reload(true);
};

/* Client Select Change To en */
function language_change_en() {
	cookie_set("setting_language", "en", 365.25);
	location.reload(true);
};

/* Check Cookie Setted Client Code */
var setting_language = cookie_get("setting_language");
if (setting_language != "zh" && setting_language != "zhs" && setting_language != "en") {
	/* Determine Client Code */
	var language_detect = navigator.language.toLowerCase();
	if (language_detect == "undefined") {
		var language_detect = navigator.browserLanguage.toLowerCase();
		if (language_detect == "undefined") {
			var language_detect = navigator.userLanguage.toLowerCase();
			if (language_detect == "undefined") {
				var language_detect = navigator.systemLanguage.toLowerCase();
			};
		};
	};
	/* Redirect Code */
	if (language_detect == "zh-hk" || language_detect == "zh-mo" || language_detect == "zh-sg" || language_detect == "zh-tw" || language_detect == "zh-hant" ) {
		var setting_language = "zh";
	};
	if (language_detect == "zh-cn" || language_detect == "zh-hans" ) {
		var setting_language = "zhs";
	};
};

/* Get String In JSON */
if (setting_language == "zh" ) {
	$.getJSON("/assets/language/zh.json", translate);
	cookie_set("setting_language", "zh", 365.25);
};
if (setting_language == "zhs" ) {
	$.getJSON("/assets/language/zhs.json", translate);
	cookie_set("setting_language", "zhs", 365.25);
};
if (setting_language != "zh" && setting_language != "zhs") {
	$.getJSON("/assets/language/en.json", translate);
	cookie_set("setting_language", "en", 365.25);
};
