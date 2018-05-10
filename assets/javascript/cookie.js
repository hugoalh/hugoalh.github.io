/*
====================================================================================================
hugoalh's Website Cookie Tool Set
Author:					hugoalh
Programming Language:	JavaScript/ECMAScript 6/7, Cookie
====================================================================================================
*/

/* Data, Set */
function cookie_set(cookie_data_name, cookie_data_value, cookie_data_expiretime) {
	var cookie_data_expiretime_set = new Date();
	cookie_data_expiretime_set.setTime(cookie_data_expiretime_set.getTime() + (cookie_data_expiretime * 24 * 60 * 60 * 1000));
	var cookie_data_expiretime_utc = cookie_data_expiretime_set.toUTCString();
	document.cookie = cookie_data_name + "=" + cookie_data_value + ";expires=" + cookie_data_expiretime_utc + ";domain=hugoalh.github.io;path=/";
};

/* Data, Get */
function cookie_get(cookie_data_name) {
	var cookie_data_name_search = cookie_data_name + "=";
	var cookie_decode = decodeURIComponent(document.cookie);
	var cookie_array = cookie_decode.split(';');
	for(var i = 0; i < cookie_array.length; i++) {
		var c = cookie_array[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		};
		if (c.indexOf(cookie_data_name_search) == 0) {
			return c.substring(cookie_data_name_search.length, c.length);
		}
	};
	return "";
};
