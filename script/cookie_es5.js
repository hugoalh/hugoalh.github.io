/*! JavaScript Macro - Cookie  @hugoalh  0.3.50 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,(function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="./compilewrapper/cookie_es5.js")}({"./compilewrapper/cookie_es5.js":function(e,t,o){"use strict";o.r(t);var r={};o.r(r),o.d(r,"Support",(function(){return i})),o.d(r,"ExpireDuration",(function(){return s})),o.d(r,"Set",(function(){return y})),o.d(r,"Get",(function(){return b})),o.d(r,"Delete",(function(){return g})),o.d(r,"Del",(function(){return m})),o.d(r,"DeleteAll",(function(){return v})),o.d(r,"DelAll",(function(){return S})),o.d(r,"Rebirth",(function(){return k}));var n=function(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":break;case"function":case"object":case"symbol":default:e=1==Array.isArray(e)?"["+JSON.stringify(e)+"]":JSON.stringify(e)}return e},i=!1;const c={ExpireDuration:31557600,Domain:location.hostname,Secure:!1};function u(){console.error("[JavaScript Macro - Cookie] Cookie is not enabled/supported in this browser!")}function a(e){console.error("[JavaScript Macro - Cookie - "+e+"] No input!")}function f(e,t){console.error("[JavaScript Macro - Cookie - "+e+'] Invalid argument "'+n(t)+'"!')}function l(e,t){console.error("[JavaScript Macro - Cookie - "+e+'] Invalid key "'+n(t)+'"! Key must be type of string!')}function s(e){if(void 0===e)return c.ExpireDuration;1==Number.isSafeInteger(e)&&e>0?c.ExpireDuration=e:console.error('[JavaScript Macro - Cookie] Invalid expire duration "'+n(e)+'"! Expire duration must be type of number, safe integer, and larger than 0!')}function p(e,t,o){let r;if(1==o||"Decay"==o){r=new Date(0).toUTCString()}else{let e=new Date;e.setTime(e.getTime()+1e3*c.ExpireDuration),r=e.toUTCString()}let n=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; expires="+r+"; domain="+c.Domain+"; path=/";1==c.Secure&&(n+="; secure");try{document.cookie=n}catch(e){console.error("[JavaScript Macro - Cookie] "+e)}}function d(e,t){"string"!=typeof e||""===e||"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t?("string"==typeof e&&""!==e||l("Set",e),"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t&&function(e,t){console.error("[JavaScript Macro - Cookie - "+e+'] Invalid value "'+n(t)+'"! Value must be type of string/number/boolean!')}("Set",t)):p(e,t,!1)}function y(){if(1==i)switch(arguments.length){case 0:a("Set");break;case 2:d(arguments[0],arguments[1]);break;case 1:if("object"==typeof arguments[0]&&null!==arguments[0]){let e=Object.keys(arguments[0]),t=Object.values(arguments[0]);for(let o=0;o<e.length;o++)d(e[o],t[o])}else f("Set",arguments[0]);break;default:f("Set",Array.from(arguments))}else u()}function b(){if(1!=i)return void u();let e=document.cookie,t={};if(""!==e){e=e.split(";");for(let o=0;o<e.length;o++){let r=e[o].split("=");for(;" "===r[0].charAt(0);)r[0]=r[0].substring(1);t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}}switch(arguments.length){case 0:return t;case 1:return"string"==typeof arguments[0]&&""!==arguments[0]?t[arguments[0]]:1==Array.isArray(arguments[0])?b(...arguments[0]):void l("Get",arguments[0]);default:let e={};for(let o=0;o<arguments.length;o++)"string"==typeof arguments[o]&&""!==arguments[o]?e[arguments[o]]=t[arguments[o]]:l("Get",arguments[o]);return e}}function g(){if(1==i)switch(arguments.length){case 0:a("Delete");break;case 1:"string"==typeof arguments[0]&&""!==arguments[0]?p(arguments[0],0,!0):1==Array.isArray(arguments[0])?g(...arguments[0]):l("Delete",arguments[0]);break;default:for(let e=0;e<arguments.length;e++)"string"==typeof arguments[e]&&""!==arguments[e]?p(arguments[e],0,!0):l("Delete",arguments[e])}else u()}1==navigator.cookieEnabled?i=!0:u(),"https:"==location.protocol&&(c.Secure=!0);const m=g;function v(){if(1!=i)return void u();let e=Object.keys(b());for(let t=0;t<e.length;t++)p(e[t],0,!0)}const S=v;function k(){1==i?y(b()):u()}o.d(t,"JavaScriptMacro_Cookie",(function(){return r})),o.d(t,"JSM_Cookie",(function(){return r})),o.d(t,"J$M_Cookie",(function(){return r}))}})}));
//# sourceMappingURL=cookie_es5.js.map