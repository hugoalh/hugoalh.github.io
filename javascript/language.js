/*==================================================================================================
hugoalh's Website Language Extension
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7/8, JSON, jQuery 2(.2.4)/3(.3.1), Cookie
==================================================================================================*/
/*Replace Language String*/
	var translate = function (jsdata) {
		$("[languagestring]").each (function (index) {
				var strTr = jsdata [$(this).attr ('languagestring')];
				$(this).html (strTr);
			}
		);
	};

/*Client Select Change Language To zh*/
	function language_change_zh() {
		cookie_set("setting_language", "zh", 365.25);
		location.reload(true);
	};

/*Client Select Change Language To zhs*/
	function language_change_zhs() {
		cookie_set("setting_language", "zhs", 365.25);
		location.reload(true);
	};

/*Client Select Change Language To en*/
	function language_change_en() {
		cookie_set("setting_language", "en", 365.25);
		location.reload(true);
	};

/*Check Cookie Setted Client Language Code*/
	var setting_language = cookie_get("setting_language");
	if (setting_language != "zh" && setting_language != "zhs" && setting_language != "en") {
		/*Determine Client Language Code*/
			var language_detect = navigator.language.toLowerCase() || navigator.browserLanguage.toLowerCase() || navigator.userLanguage.toLowerCase() || navigator.systemLanguage.toLowerCase();
		/*Redirect Language Code*/
			if (language_detect == "zh-hk" || language_detect == "zh-mo" || language_detect == "zh-sg" || language_detect == "zh-tw" || language_detect == "zh-hant" ) {
				var setting_language = "zh";
			};
			if (language_detect == "zh-cn" || language_detect == "zh-hans" ) {
				var setting_language = "zhs";
			};
	};

/*Get Language String From JSON*/
	if (setting_language == "zh" ) {
		$.getJSON("/language/zh.json", translate);
		cookie_set("setting_language", "zh", 365.25);
	};
	if (setting_language == "zhs" ) {
		$.getJSON("/language/zhs.json", translate);
		cookie_set("setting_language", "zhs", 365.25);
	};
	if (setting_language != "zh" && setting_language != "zhs") {
		$.getJSON("/language/en.json", translate);
		cookie_set("setting_language", "en", 365.25);
	};
