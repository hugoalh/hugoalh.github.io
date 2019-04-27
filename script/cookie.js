/*========
Cookie
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
		Cookie
========*/
/*Set Cookie*/
	function cookie_set(name, value, expiretime) {
		var domain_set = location.hostname;
		var expiretime_set = new Date();
		expiretime_set.setTime(expiretime_set.getTime() + (expiretime * 24 * 60 * 60 * 1000));
		var expiretime_set_utc = expiretime_set.toUTCString();
		document.cookie = name + "=" + value + ";expires=" + expiretime_set_utc + ";domain=" + domain_set + ";path=/";
	};

/*Get Cookie*/
	function cookie_get(cookie_name) {
		var cookie_name_search = cookie_name + "=";
		var cookie_decode = decodeURIComponent(document.cookie);
		var cookie_array = cookie_decode.split(';');
		for(var i = 0; i < cookie_array.length; i++) {
			var c = cookie_array[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			};
			if (c.indexOf(cookie_name_search) == 0) {
				return c.substring(cookie_name_search.length, c.length);
			}
		};
		return "";
	};
