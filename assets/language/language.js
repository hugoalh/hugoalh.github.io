var language_provide = ['en', 'ch', 'chs'];
var langJS = null;

var translate = function (jsdata)
{
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
		$(this).html (strTr);
	});
};

var language_code = (navigator.language(0) || navigator.userLanguage(0) || navigator.browserLanguage(0)).toLowerCase();

if (language_code == zh-tw) {
	var language_code = ch;
};
if (language_code == zh-hk) {
	var language_code = ch;
};
if (language_code == zh-hant) {
	var language_code = ch;
};

if (language_code in language_provide) {
	$.getJSON('assets/language/'+language_code+'.json', translate);
} else {
	$.getJSON('assets/language/en.json', translate);
}
