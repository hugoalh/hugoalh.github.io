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

var language_code = '';

if (navigator.language == zh-TW) {
	var language_code = ch;
};
if (navigator.language == zh-HK) {
	var language_code = ch;
};
if (navigator.language == zh-Hant) {
	var language_code = ch;
};

if (language_code in language_provide) {
	$.getJSON('assets/language/'+language_code+'.json', translate);
} else {
	$.getJSON('assets/language/en.json', translate);
}
