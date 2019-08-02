/*========
Storage - Client Browser
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6/7/8
========*/
var Storage_Browser_Accessible = {
	"LocalStorage": ""
};
if (window.localStorage) {
	Storage_Browser_Accessible["LocalStorage"] = true;
} else {
	Storage_Browser_Accessible["LocalStorage"] = false;
};
console.table({
	"LocalStorage": {
		"Accessible": Storage_Browser_Accessible["LocalStorage"]
	}
});

/*Set*/
	function Storage_Browser_Set(Key, Value) {
		if (Storage_Browser_Accessible["LocalStorage"] == true) {
			window.localStorage.setItem(Key, Value);
		};
	};
/*Get*/
	function Storage_Browser_Get(Key) {
		if (Storage_Browser_Accessible["LocalStorage"] == true) {
			window.localStorage.getItem(Key);
		};
	};
/*Delete*/
	function Storage_Browser_Delete(Key) {
		if (Storage_Browser_Accessible["LocalStorage"] == true) {
			window.localStorage.removeItem(Key);
		};
	};
/*Delete All*/
	function Storage_Browser_DeleteAll() {
		if (Storage_Browser_Accessible["LocalStorage"] == true) {
			window.localStorage.clear();
		};
	};
