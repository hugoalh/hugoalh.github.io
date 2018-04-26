var language_provide = ['en', 'ch', 'chs'];
/* var language_code = ''; */
var langJS = null;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
		$(this).html (strTr);
	});
}

var cookie = document.cookie;

var language_code = navigator.language.substr ();

if ("zh-TW" in language_code || language_code == "zh-HK" || language_code == "zh-Hant") {
	var language_code = ch;
}

if (language_code in language_provide) {
	$.getJSON('assets/language/'+language_code+'.json', translate);
} else {
	$.getJSON('assets/language/en.json', translate);
}
