/*
Storage - Browser
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
var Storage_Browser_Support = {
	"LocalStorage": false
};
if (window.localStorage) {
	Storage_Browser_Support["LocalStorage"] = true;
};
console.table({
	"LocalStorage": {
		"Support": Storage_Browser_Support["LocalStorage"]
	}
});

/*Set*/
	function Storage_Browser_Set(Key, Value) {
		if (Storage_Browser_Support["LocalStorage"] == true) {
			window.localStorage.setItem(Key, Value);
		};
	};
/*Get*/
	function Storage_Browser_Get(Key) {
		if (Storage_Browser_Support["LocalStorage"] == true) {
			window.localStorage.getItem(Key);
		};
	};
/*Delete*/
	function Storage_Browser_Delete(Key) {
		if (Storage_Browser_Support["LocalStorage"] == true) {
			window.localStorage.removeItem(Key);
		};
	};
/*Delete All*/
	function Storage_Browser_DeleteAll() {
		if (Storage_Browser_Support["LocalStorage"] == true) {
			window.localStorage.clear();
		};
	};
