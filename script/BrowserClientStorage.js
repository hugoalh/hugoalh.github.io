/*========
Browser Client Storage
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
========*/
var ClientStorageMode;
if (window.localStorage) {
	ClientStorageMode = "WebStorage";
} else if (document.cookie) {
	ClientStorageMode = "Cookie";
} else {
	ClientStorageMode = "None";
};
var HostAddress = location.hostname;

/*Sub Function*/
	/*WebStorage*/
		/*Set*/
			function WebStorage_Set(Name, Value) {
				window.localStorage.setItem(Name, Value);
			};
		/*Get*/
			function WebStorage_Get(Name) {
				window.localStorage.getItem(Name);
			};
		/*Remove*/
			function WebStorage_Remove(Name) {
				window.localStorage.removeItem(Name);
			};
		/*Clear*/
			function WebStorage_Clear() {
				window.localStorage.clear();
			};
	/*Cookie*/
		/*Set*/
			function Cookie_Set(Name, Value) {
				var ExpireTime = new Date();
				ExpireTime.setTime(ExpireTime.getTime() + (365.25 * 24 * 60 * 60 * 1000));
				ExpireTime = ExpireTime.toUTCString();
				document.cookie = Name + "=" + Value + ";expires=" + ExpireTime + ";domain=" + HostAddress + ";path=/";
			};
		/*Get*/
			function Cookie_Get(Name) {
				var Search = Name + "=";
				var Decode = decodeURIComponent(document.cookie);
				var DecodeArray = Decode.split(';');
				for(var i = 0; i < DecodeArray.length; i++) {
					var c = DecodeArray[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					};
					if (c.indexOf(Search) == 0) {
						return c.substring(Search.length, c.length);
					};
				};
				return "";
			};
		/*Remove*/
			function Cookie_Remove(Name) {
				var ExpireTime = new Date();
				ExpireTime = ExpireTime.toUTCString();
				document.cookie = Name + "=\"\"" + ";expires=" + ExpireTime + ";domain=" + HostAddress + ";path=/";
			};

/*Set*/
	function BrowserClientStorage_Set(Name, Value) {
		if (ClientStorageMode == "WebStorage") {
			WebStorage_Set(Name, Value);
		};
		if (ClientStorageMode == "Cookie") {
			Cookie_Set(Name, Value);
		};
	};
/*Get*/
	function BrowserClientStorage_Get(Name) {
		if (ClientStorageMode == "WebStorage") {
			WebStorage_Get(Name);
		};
		if (ClientStorageMode == "Cookie") {
			Cookie_Get(Name);
		};
	};
/*Remove*/
	function BrowserClientStorage_Remove(Name) {
		if (ClientStorageMode == "WebStorage") {
			WebStorage_Remove(Name);
		};
		if (ClientStorageMode == "Cookie") {
			Cookie_Remove(Name);
		};
	};
/*Clear*/
	function BrowserClientStorage_Clear(Name) {
		if (ClientStorageMode == "WebStorage") {
			WebStorage_Clear(Name);
		};
