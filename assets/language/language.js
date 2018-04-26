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

if (langCode in langs)
	$.getJSON('assets/language/'+langCode+'.json', translate);
else
	$.getJSON('assets/language/en.json', translate);
