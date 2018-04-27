var language_provide = ["en", "ch", "chs"];
var langJS = null;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
		$(this).html (strTr);
	});
};

var detect_language = navigator.language.toLowerCase() || navigator.userLanguage.toLowerCase() || navigator.browserLanguage.toLowerCase();

if (detect_language == "zh-tw") {
	var language_code = "ch";
};
if (detect_language == "zh-hk") {
	var language_code = "ch";
};
if (detect_language == "zh-hant") {
	var language_code = "ch";
};

if (language_code in language_provide) {
	$.getJSON("assets/language/" + language_code + ".json", translate);
} else {
	$.getJSON("assets/language/en.json", translate);
}
