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

var zhtw = zh-TW;
var zhhk = zh-HK;
var zhhant = zh-Hant;

if (navigator.language == zhtw) {
	var language_code = "ch";
};
if (navigator.language == zhhk) {
	var language_code = "ch";
};
if (navigator.language == zhhant) {
	var language_code = "ch";
};

if (language_code in language_provide) {
	$.getJSON('assets/language/'+language_code+'.json', translate);
} else {
	$.getJSON('assets/language/en.json', translate);
}
