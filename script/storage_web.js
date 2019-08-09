/*
Storage - Web
	Author
		hugoalh
	Language
		JavaScript/ECMAScript 6
*/
Storage_SupportStat = {
	"LocalStorage": false
};
if (window.localStorage) {
	Storage_SupportStat["LocalStorage"] = true;
};
console.table({
	"LocalStorage": {
		"Support Stat": Storage_SupportStat["LocalStorage"]
	}
});
		
/*Set*/
	function Storage_Set(Key, Value) {
		if (Storage_SupportStat["LocalStorage"] == true) {
			try {
				window.localStorage.setItem(Key, Value);
			} catch(error) {
				console.error(error);
			};
		};
	};
/*Get*/
	function Storage_Get(Key) {
		if (Storage_SupportStat["LocalStorage"] == true) {
			window.localStorage.getItem(Key);
		};
	};
/*Delete*/
	function Storage_Delete(Key) {
		if (Storage_SupportStat["LocalStorage"] == true) {
			window.localStorage.removeItem(Key);
		};
	};
/*Delete All*/
	function Storage_DeleteAll() {
		if (Storage_SupportStat["LocalStorage"] == true) {
			window.localStorage.clear();
		};
	};
