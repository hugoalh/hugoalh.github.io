/*
==================================================
Name:	Cookie
API:	JavaScript (ECMAScript 5/5.1/6/7), Cookie
Author:	hugoalh
==================================================
*/

/* Data, Set */
function cookie_data_set(cookie_datasection_name, cookie_datasection_value) {
	var cookie_time_expire = new Date();
	cookie_time_expire.setTime(cookie_time_expire.getTime() + (365.25 * 24 * 60 * 60 * 1000));
	var cookie_time_expire_utc = cookie_time_expire.toUTCString();
	document.cookie = cookie_datasection_name + "=" + cookie_datasection_value + ";expires=" + cookie_time_expire_utc + ";domain=hugoalh.github.io";
};

/* Data, Get */
function cookie_data_get(cookie_datasection_name) {
	var cookie_datasection_name_search = cookie_datasection_name + "=";
	var cookie_decode = decodeURIComponent(document.cookie);
	var cookie_array = cookie_decode.split(';');
	for(var i = 0; i < cookie_array.length; i++) {
		var c = cookie_array[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		};
		if (c.indexOf(cookie_datasection_name_search) == 0) {
			return c.substring(cookie_datasection_name_search.length, c.length);
		}
	};
	return "";
}
