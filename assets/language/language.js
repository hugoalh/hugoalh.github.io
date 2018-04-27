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

if (detect_language == "zh-tw" || detect_language == "zh-hk" || detect_language == "zh-hant" ) {
/*	$.getJSON("assets/language/ch.json", translate);*/
	$.getJSON("ch.json", translate);
} else {
	$.getJSON("assets/language/en.json", translate);
}
