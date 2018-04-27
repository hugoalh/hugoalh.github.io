/* var language_provide = ["en", "ch", "chs"]; */
var language_provide = "en" || "ch" || "chs";
/* var langJS = null; */

var translate = function (jsdata)
{
	$("[languagestring]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

var language_detect = navigator.language.toLowerCase() || navigator.userLanguage.toLowerCase() || navigator.browserLanguage.toLowerCase();

/* if (detect_language == "zh-tw" || detect_language == "zh-hk" || detect_language == "zh-hant" ) {
	$.getJSON("assets/language/ch.json", translate);
} else {
	$.getJSON("assets/language/en.json", translate);
} */
if (language_detect == "zh-tw" || language_detect == "zh-hk" || language_detect == "zh-hant" ) {
	var language_set = "ch";
}
if (language_set == language_provide ) {
	$.getJSON("assets/language/" + language_set + ".json", translate);
} else {
	$.getJSON("assets/language/en.json", translate);
}
