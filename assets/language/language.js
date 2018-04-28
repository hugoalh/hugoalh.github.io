// ==================================================
// @hugoalh
// ==================================================

// Function, Replace Language String
var translate = function (jsdata) {
	$("[languagestring]").each (function (index) {
		var strTr = jsdata [$(this).attr ('languagestring')];
		$(this).html (strTr);
	});
};

// Function, Cookie, Set
function cookie_set(cookie_section_name, cookie_section_value) {
	var time_now = new Date();
	var cookie_time_expire = time_now.setTime(time_now.getTime() + (365 * 24 * 60 * 60 * 1000));
	document.cookie = cookie_section_name + "=" + cookie_section_value + ";expires=" + cookie_time_expire.toUTCString() + ";domain=hugoalh.github.com";
};

// Function, Cookie, Check
/*
function cookie_check() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
*/

// Get Client Language Code
var language_detect = navigator.language.toLowerCase();
if (language_detect == "undefined") {
	var language_detect = navigator.browserLanguage.toLowerCase();
	if (language_detect == "undefined") {
		var language_detect = navigator.userLanguage.toLowerCase();
		if (language_detect == "undefined") {
			var language_detect = navigator.systemLanguage.toLowerCase();
		}
	}
};

// Redirect Language Code
if (language_detect == "zh-hk" || language_detect == "zh-mo" || language_detect == "zh-sg" || language_detect == "zh-tw" || language_detect == "zh-hant" ) {
	var language_set = "zh";
};
if (language_detect == "zh-cn" || language_detect == "zh-hans" ) {
	var language_set = "zhs";
};

// Get Language String In JSON
if (language_set == "zh" ) {
	$.getJSON("assets/language/zh.json", translate);
};
if (language_set == "zhs" ) {
	$.getJSON("assets/language/zhs.json", translate);
};
if (language_set != "zh" && language_set != "zhs") {
	$.getJSON("assets/language/en.json", translate);
}
