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

var language_code = navigator.language.toLowerCase(0, 2) || navigator.userLanguage.toLowerCase(0, 2) || navigator.browserLanguage.toLowerCase(0, 2);

/* if (language_code == zh-tw) {
	var language_code = ch;
};
if (language_code == zh-hk) {
	var language_code = ch;
};
if (language_code == zh-hant) {
	var language_code = ch;
}; */

if (language_code in language_provide) {
	$.getJSON('assets/language/'+language_code+'.json', translate);
} else {
	$.getJSON('assets/language/en.json', translate);
}
