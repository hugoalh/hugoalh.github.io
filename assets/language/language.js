/* Replace Language String */
var translate = function (jsdata) {
	$("[languagestring]").each (function (index) {
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

/* Get Client Language Code */
var language_detect = navigator.language.toLowerCase() || navigator.userLanguage.toLowerCase() || navigator.browserLanguage.toLowerCase();

/* Simplify/Redirect Language Code*/
if (language_detect == "zh-tw" || language_detect == "zh-hk" || language_detect == "zh-hant" ) {
	var language_set = "ch";
}

/* Get Language String In JSON */
if (language_set == "ch" ) {
	$.getJSON("assets/language/ch.json", translate);
} else {
	if (language_set == "chs" ) {
		$.getJSON("assets/language/chs.json", translate);
	} else {
		$.getJSON("assets/language/en.json", translate);
	}
}
