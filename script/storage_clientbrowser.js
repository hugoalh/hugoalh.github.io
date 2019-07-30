/*========
Storage - Client Browser
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
========*/
let StorageMethod = {
	"LocalStorage": ""
};
if (window.localStorage) {
	StorageMethod["LocalStorage"] = true;
} else {
	StorageMethod["LocalStorage"] = false;
};

/*Set*/
	function Storage_ClientBrowser_Set(Name, Value) {
		if (StorageMethod["LocalStorage"] == true) {
			window.localStorage.setItem(Name, Value);
		};
	};
/*Get*/
	function Storage_ClientBrowser_Get(Name) {
		if (StorageMethod["LocalStorage"] == true) {
			window.localStorage.getItem(Name);
		};
	};
/*Delete*/
	function Storage_ClientBrowser_Delete(Name) {
		if (StorageMethod["LocalStorage"] == true) {
			window.localStorage.removeItem(Name);
		};
	};
/*Delete All*/
	function Storage_ClientBrowser_DeleteAll() {
		if (StorageMethod["LocalStorage"] == true) {
			window.localStorage.clear();
		};
	};
