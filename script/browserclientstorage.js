/*========
Browser Client Storage
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
========*/
var BrowserClientStorageMethod = {
	"Local": false,
	"Cookie": false,
};
if (window.localStorage) {
	BrowserClientStorageMethod["Local"] = true;
};
if (document.cookie) {
	BrowserClientStorageMethod["Cookie"] = true;
};
var HostAddress = location.hostname;

/*Sub Function*/
	/*Local Storage*/
		/*Set*/
			function LocalStorage_Set(Name, Value) {
				window.localStorage.setItem(Name, Value);
			};
		/*Get*/
			function LocalStorage_Get(Name) {
				window.localStorage.getItem(Name);
			};
		/*Delete*/
			function LocalStorage_Delete(Name) {
				window.localStorage.removeItem(Name);
			};
		/*Delete All*/
			function LocalStorage_DeleteAll() {
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
		/*Delete*/
			function Cookie_Delete(Name) {
				var ExpireTime = new Date();
				ExpireTime = ExpireTime.toUTCString();
				document.cookie = Name + "=\"\"" + ";expires=" + ExpireTime + ";domain=" + HostAddress + ";path=/";
			};

/*Set*/
	function BrowserClientStorage_Set(Name, Value) {
		if (BrowserClientStorageMethod["Local"] == true) {
			LocalStorage_Set(Name, Value);
		} else if (BrowserClientStorageMethod["Cookie"] == true) {
				Cookie_Set(Name, Value);
		};
	};
/*Get*/
	function BrowserClientStorage_Get(Name) {
		if (BrowserClientStorageMethod["Local"] == true) {
			LocalStorage_Get(Name);
		} else if (BrowserClientStorageMethod["Cookie"] == true) {
				Cookie_Get(Name);
		};
	};
/*Delete*/
	function BrowserClientStorage_Delete(Name) {
		if (BrowserClientStorageMethod["Local"] == true) {
			LocalStorage_Delete(Name);
		} else if (BrowserClientStorageMethod["Cookie"] == true) {
				Cookie_Delete(Name);
		};
	};
/*Delete All*/
	function BrowserClientStorage_DeleteAll(Name) {
		if (BrowserClientStorageMethod["Local"] == true) {
			LocalStorage_DeleteAll(Name);
		};
