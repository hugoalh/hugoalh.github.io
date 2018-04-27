/* Replace Language String */
var translate = function (jsdata) {
	$("[languagestring]").each (function (index) {
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

/* Get Client Language Code */
var language_detect = navigator.language.toLowerCase() || navigator.userLanguage.toLowerCase() || navigator.browserLanguage.toLowerCase();

/* Simplify/Redirect Language Code*/
if (language_detect == "zh-hk" || language_detect == "zh-mo" || language_detect == "zh-sg" || language_detect == "zh-tw" || language_detect == "zh-hant" ) {
	var language_set = "zh";
};
if (language_detect == "zh-cn" || language_detect == "zh-hans" ) {
	var language_set = "zhs";
};

/* Get Language String In JSON */
if (language_set == "zh" ) {
	$.getJSON("assets/language/zh.json", translate);
} else {
	if (language_set == "zhs" ) {
		$.getJSON("assets/language/zhs.json", translate);
	} else {
		$.getJSON("assets/language/en.json", translate);
	};
}
