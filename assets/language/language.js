/* var language_provide = ['en', 'ch', 'chs'];
var langJS = null;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
		$(this).html (strTr);
	});
}

var language_code = navigator.language;

if (language_code == "zh-TW") {
	var language_code = "ch";
}
if (language_code == "zh-HK") {
	var language_code = "ch";
}
if (language_code == "zh-Hant") {
	var language_code = "ch";
}

if (language_code in language_provide) {
	$.getJSON('assets/language/'+language_code+'.json', translate);
} else {
	$.getJSON('assets/language/en.json', translate);
}
*/
var langs = ['en', 'ch'];
var langCode = '';
var langJS = null;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
		$(this).html (strTr);
	}
	);
}

langCode = navigator.language.substr (0, 2);

if (langCode == zh-TW) {
	var langCode = "ch";
}

if (langCode in langs)
	$.getJSON('assets/language/'+langCode+'.json', translate);
else
	$.getJSON('assets/language/en.json', translate);
