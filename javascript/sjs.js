(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./develop/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./develop/browserstorage.js":
/*!***********************************!*\
  !*** ./develop/browserstorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\nSimplify JavaScript - Browser Storage\r\n\tAuthor\r\n\t\thugoalh\r\n\tLanguage\r\n\t\tJavaScript/ECMAScript 5\r\n*/\r\nvar Storage_SupportStat = {\r\n\t\"LocalStorage\": false,\r\n\t\"SessionStorage\": false,\r\n\t\"Cookie\": false\r\n};\r\nif (window.localStorage) {\r\n\tStorage_SupportStat[\"LocalStorage\"] = true;\r\n};\r\nif (window.sessionStorage) {\r\n\tStorage_SupportStat[\"SessionStorage\"] = true;\r\n};\r\nif (window.navigator.cookieEnabled) {\r\n\tStorage_SupportStat[\"Cookie\"] = true;\r\n};\r\nconsole.table({\r\n\t\"LocalStorage\": {\r\n\t\t\"Support Stat\": Storage_SupportStat[\"LocalStorage\"]\r\n\t},\r\n\t\"SessionStorage\": {\r\n\t\t\"Support Stat\": Storage_SupportStat[\"SessionStorage\"]\r\n\t},\r\n\t\"Cookie\": {\r\n\t\t\"Support Stat\": Storage_SupportStat[\"Cookie\"]\r\n\t}\r\n});\r\n\r\n/* Set */\r\n\tfunction Storage_Set(Key, Value) {\r\n\t\tif (Storage_SupportStat[\"LocalStorage\"] == true) {\r\n\t\t\ttry {\r\n\t\t\t\twindow.localStorage.setItem(Key, Value);\r\n\t\t\t} catch (error) {\r\n\t\t\t\tconsole.error(error);\r\n\t\t\t};\r\n\t\t};\r\n\t};\r\n\r\n/*Get*/\r\n\tfunction Storage_Get(Key) {\r\n\t\tif (Storage_SupportStat[\"LocalStorage\"] == true) {\r\n\t\t\twindow.localStorage.getItem(Key);\r\n\t\t};\r\n\t};\r\n\r\n/*Delete*/\r\n\tfunction Storage_Delete(Key) {\r\n\t\tif (Storage_SupportStat[\"LocalStorage\"] == true) {\r\n\t\t\twindow.localStorage.removeItem(Key);\r\n\t\t};\r\n\t};\r\n\r\n/*Delete All*/\r\n\tfunction Storage_DeleteAll() {\r\n\t\tif (Storage_SupportStat[\"LocalStorage\"] == true) {\r\n\t\t\twindow.localStorage.clear();\r\n\t\t};\r\n\t};\r\n\n\n//# sourceURL=webpack:///./develop/browserstorage.js?");

/***/ }),

/***/ "./develop/main.js":
/*!*************************!*\
  !*** ./develop/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\r\nSimplify JavaScript\r\n\tAuthor\r\n\t\thugoalh\r\n\tLanguage\r\n\t\tJavaScript/ECMAScript 5\r\n*/\r\n/* Define Library Index */\r\n\tconst SimplifyJavaScript = {};\r\n/* Library Core */\r\n\tSimplifyJavaScript[\"Version\"] = function(VersionSyntax = -1) {\r\n\t\tconst LibraryVersion = \"0.0.1\";\r\n\t\tlet loot = LibraryVersion.split(\".\");\r\n\t\tif (Number.isInteger(VersionSyntax) != true || VersionSyntax < -1 || VersionSyntax > 4) {\r\n\t\t\tVersionSyntax = -1;\r\n\t\t};\r\n\t\tswitch (VersionSyntax) {\r\n\t\t\tcase -1:\r\n\t\t\t\treturn LibraryVersion;\r\n\t\t\t\tbreak;\r\n\t\t\tcase 0:\r\n\t\t\t\treturn loot[0];\r\n\t\t\t\tbreak;\r\n\t\t\tcase 1:\r\n\t\t\t\treturn loot[1];\r\n\t\t\t\tbreak;\r\n\t\t\tcase 2:\r\n\t\t\t\treturn loot[2];\r\n\t\t\t\tbreak;\r\n\t\t\tcase 3:\r\n\t\t\t\treturn loot[0] + \".\" + loot[1];\r\n\t\t\t\tbreak;\r\n\t\t\tcase 4:\r\n\t\t\t\treturn loot[1] + \".\" + loot[2];\r\n\t\t\t\tbreak;\r\n\t\t};\r\n\t};\r\n\r\n/* Library Browser Module */\r\n\tSimplifyJavaScript[\"BrowserStorage\"] = __webpack_require__(/*! ./browserstorage.js */ \"./develop/browserstorage.js\");\r\n\r\n/* Package Library */\r\n\tconst SJS = SimplifyJavaScript;\r\n\t/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\t\tSimplifyJavaScript,\r\n\t\tSJS\r\n\t});\r\n\n\n//# sourceURL=webpack:///./develop/main.js?");

/***/ })

/******/ });
});