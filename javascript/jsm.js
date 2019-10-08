/*! JavaScript Macro @hugoalh 0.2.20191008 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(this,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"JavaScriptMacro",(function(){return m})),r.d(t,"JSM",(function(){return f})),r.d(t,"J$M",(function(){return h}));r(1);const a="0.2.20191008";function n(e){if(void 0===e)return a;{if("string"==typeof e)switch(e){case"Major":case"major":case"MAJOR":e=0;break;case"Minor":case"minor":case"MINOR":e=1;break;case"Patch":case"patch":case"PATCH":e=2}let t=a.split(".");return!0===Number.isInteger(e)&&e>=0&&e<t.length?t[e]:void console.warn("%cJavaScript Macro - Version","font-weight: bold;","\n",'Invalid version semantic "'+JSON.stringify(e)+'"! Version semantic must be type of number, integer, and between 0 and '+(t.length-1)+"!")}}const o=r(2),i=r(3),c=r(4),s=r(5),u=r(6),l=r(7),m={Version:n,V:n,Test:function(e="Hello, developer!"){return console.log(e)},Document:o,DOM:o,HTML:o,VirtualMemory:i,VMemory:i,Snooper:c,Snoop:c,I:c,Cookie:s,Storage:u,Converter:l,Convert:l},f=m,h=m},function(e,t){Math.addition=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0==e.length)return void console.error("Math.addition: No input!");{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.addition: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}let t=e[0];if(e.length>1)for(let r=1;r<e.length;r++)t+=e[r];return t},Math.add=Math.addition,Math.subtraction=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0==e.length)return void console.error("Math.subtraction: No input!");{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.subtraction: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}let t=e[0];if(e.length>1)for(let r=1;r<e.length;r++)t-=e[r];return t},Math.subtract=Math.subtraction,Math.multiplication=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0==e.length)return void console.error("Math.multiplication: No input!");{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.multiplication: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}let t=e[0];if(e.length>1)for(let r=1;r<e.length;r++)t*=e[r];return t},Math.multiply=Math.multiplication,Math.division=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0==e.length)return void console.error("Math.division: No input!");{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.division: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}let t=e[0];if(e.length>1)for(let r=1;r<e.length;r++)t/=e[r];return t},Math.divide=Math.division,Math.root=function(e,t){return"number"==typeof e&&"number"==typeof t?Math.pow(e,1/t):("number"!=typeof e&&console.error('Math.root: Base "'+JSON.stringify(e)+'" is not a number!'),void("number"!=typeof t&&console.error('Math.root: Root "'+JSON.stringify(t)+'" is not a number!')))},Math.greatestcommondivisor=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0!=e.length){{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.greatestcommondivisor: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}if(2==e.length)return 0==e[1]?e[0]:Math.gcd(e[1],e[0]%e[1]);if(e.length>2){var t=Math.gcd(e[0],e[1]);for(let r=2;r<e.length;r++)t=Math.gcd(t,e[r]);return t}return e[0]}console.error("Math.greatestcommondivisor: No input!")},Math.gcd=Math.greatestcommondivisor,Math.greatestcommonfactor=Math.greatestcommondivisor,Math.gcf=Math.greatestcommondivisor,Math.highestcommonfactor=Math.greatestcommondivisor,Math.hcf=Math.greatestcommondivisor,Math.greatestcommonmeasure=Math.greatestcommondivisor,Math.gcm=Math.greatestcommondivisor,Math.highestcommondivisor=Math.greatestcommondivisor,Math.hcd=Math.greatestcommondivisor,Math.leastcommonmultiple=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0!=e.length){{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.leastcommonmultiple: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}return e.length>1?Math.abs(Math.multiplication(e))/Math.gcd(e):e[0]}console.error("Math.leastcommonmultiple: No input!")},Math.lowestcommonmultiple=Math.leastcommonmultiple,Math.lcm=Math.leastcommonmultiple,Math.smallestcommonmultiple=Math.leastcommonmultiple,Math.scm=Math.leastcommonmultiple,Math.hypotenuse=function(e,t,r="h"){if("number"!=typeof e||"number"!=typeof t)return"number"!=typeof e&&console.error('Math.hypotenuse: "'+JSON.stringify(e)+'" is not a number!'),void("number"!=typeof t&&console.error('Math.hypotenuse: "'+JSON.stringify(t)+'" is not a number!'));switch(r){case"h":case"H":return Math.sqrt(e*e+t*t);case"c":case"C":return Math.sqrt(e*e-t*t);default:return void console.error('Math.hypotenuse: Invalid query "'+JSON.stringify(r)+'"!')}},Math.antihypotenuse=function(e,t){return Math.hypotenuse(e,t,"c")},Math.xhypotenuse=Math.antihypotenuse,Math.factorial=function(e){if(!0===Number.isInteger(e)&&e>0){let t=e;for(;e>1;)t*=--e;return t}return!0===Number.isInteger(e)&&0==e?1:void console.error('Math.factorial: "'+JSON.stringify(e)+'" is not a number, integer, and positive number!')},Math.factor=Math.factorial,Math.fact=Math.factorial,Number.prototype.factorial=function(){return Math.factorial(this.valueOf())},Number.prototype.factor=Number.prototype.factorial,Number.prototype.fact=Number.prototype.factorial,Math.permutation=function(e,t){return!0===Number.isInteger(e)&&!0===Number.isInteger(t)&&e>=0&&t>=0&&e>=t?Math.factorial(e)/Math.factorial(e-t):((!0!==Number.isInteger(e)||e<0)&&console.error('Math.permutation: "'+JSON.stringify(e)+'" is not a number, integer, and positive number!'),(!0!==Number.isInteger(t)||t<0)&&console.error('Math.permutation: "'+JSON.stringify(t)+'" is not a number, integer, and positive number!'),void(e<t&&console.error("Math.permutation: Illogical permutation!")))},Math.nPr=Math.permutation,Math.permute=Math.permutation,Math.cumulativepermutation=function(e){if(!0===Number.isInteger(e)&&e>=0){let t=0;for(let r=1;r<=e;r++)t+=Math.permutation(e,r);return t}console.error('Math.cumulativepermutation: "'+JSON.stringify(e)+'" is not a number, integer, and positive number!')},Math.cumpermute=Math.cumulativepermutation,Number.prototype.cumulativepermutation=function(){return Math.cumulativepermutation(this.valueOf())},Number.prototype.cumpermute=Number.prototype.cumulativepermutation,Math.combination=function(e,t){return!0===Number.isInteger(e)&&!0===Number.isInteger(t)&&e>=0&&t>=0&&e>=t?Math.factorial(e)/(Math.factorial(t)*Math.factorial(e-t)):((!0!==Number.isInteger(e)||e<0)&&console.error('Math.permutation: "'+JSON.stringify(e)+'" is not a number, integer, and positive number!'),(!0!==Number.isInteger(t)||t<0)&&console.error('Math.permutation: "'+JSON.stringify(t)+'" is not a number, integer, and positive number!'),void(e<t&&console.error("Math.combination: Illogical combination!")))},Math.nCr=Math.combination,Math.combine=Math.combination,Math.cumulativecombination=function(e){if(!0===Number.isInteger(e)&&e>=0){let t=0;for(let r=1;r<=e;r++)t+=Math.combination(e,r);return t}console.error('Math.cumulativecombination: "'+JSON.stringify(e)+'" is not a number, integer, and positive number!')},Math.cumcombine=Math.cumulativecombination,Number.prototype.cumulativecombination=function(){return Math.cumulativecombination(this.valueOf())},Number.prototype.cumcombine=Number.prototype.cumulativecombination,Math.sort=function(){let e,t=[];if(!0===Array.isArray(arguments[0]))t=arguments[0],e=arguments[1];else{for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);"number"==typeof arguments[arguments.length-1]?t.push(arguments[arguments.length-1]):e=arguments[arguments.length-1]}if(0==t.length)return void console.error("Math.sort: No input!");{let e=!1;for(let r=0;r<t.length;r++)"number"!=typeof t[r]&&(console.error('Math.sort: "'+JSON.stringify(t[r])+'" is not a number!'),e=!0);if(1==e)return}let r=[];switch(e){case"Ascending":case"ascending":case"LH":case"AZ":case"":case"Normal":case"normal":case void 0:for(;t.length>1;){let e=Math.min(...t);r.push(e),t.splice(t.indexOf(e),1)}return r.push(t[0]),r;case"Descending":case"descending":case"HL":case"ZA":case"Reverse":case"reverse":for(;t.length>1;){let e=Math.max(...t);r.push(e),t.splice(t.indexOf(e),1)}return r.push(t[0]),r;default:return void console.error('Math.sort: Invalid sort method "'+JSON.stringify(e)+'"!')}},Math.mean=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0!=e.length){{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.mean: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}return Math.addition(e)/e.length}console.error("Math.mean: No input!")},Math.average=Math.mean,Math.median=function(){let e=[];if(!0===Array.isArray(arguments[0]))e=arguments[0];else for(let t=0;t<arguments.length;t++)e.push(arguments[t]);if(0!=e.length){{let t=!1;for(let r=0;r<e.length;r++)"number"!=typeof e[r]&&(console.error('Math.median: "'+JSON.stringify(e[r])+'" is not a number!'),t=!0);if(1==t)return}switch((e=Math.sort(e,"Ascending")).length%2){case 0:return Math.mean(e[e.length/2-1],e[e.length/2]);case 1:return e[e.length/2-.5]}}else console.error("Math.median: No input!")}},function(e,t,r){"use strict";function a(e,t,r){if(void 0===t||""===t)return void console.error("%cJavaScript Macro - Document","font-weight: bold;","\n",'Invalid property "'+JSON.stringify(t)+'" in "Style" with selector "'+JSON.stringify(e)+'"!');if(-1!=t.search("-")){0==t.search("-")&&(t=t.substring(1));let e=t.split("-");for(let t=1;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].substring(1);t=e.join("")}let a=document.querySelectorAll(e);if(0==a.length)!function(e,t){console.log("%cJavaScript Macro - Document","font-weight: bold;","\n",'No match result with selector "'+JSON.stringify(t)+'" in "'+e+'".')}("Style",e);else for(let e=0;e<a.length;e++)try{a[e].style[t]=r}catch(e){console.error("%cJavaScript Macro - Document","font-weight: bold;","\n",e)}}function n(e,t,r){return a(e,t,r)}r.r(t),r.d(t,"Style",(function(){return n}))},function(e,t,r){"use strict";r.r(t),r.d(t,"Set",(function(){return i})),r.d(t,"Get",(function(){return s})),r.d(t,"Delete",(function(){return l})),r.d(t,"Del",(function(){return m})),r.d(t,"DeleteAll",(function(){return f})),r.d(t,"DelAll",(function(){return h}));const a={};function n(e,t){console.error("%cJavaScript Macro - Virtual Memory","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string!')}function o(e,t){console.error("%cJavaScript Macro - Virtual Memory","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function i(e,t=null){"string"==typeof e?a[e]=t:n("Set",e)}function c(e){return a[e]}function s(e){if(void 0===e)return a;if("string"==typeof e)return c(e);if(!0===Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(c(e[r])):(o("Get",e[r]),t.push(void 0));return t}n("Get",e)}function u(e){delete a[e]}function l(e){if("string"==typeof e)u(e);else if(!0===Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?u(e[t]):o("Delete",e[t]);else n("Delete",e)}const m=l;function f(){let e=Object.keys(a);for(let t=0;t<e.length;t++)u(e[t])}const h=f},function(e,t,r){"use strict";r.r(t),r.d(t,"Agent",(function(){return c})),r.d(t,"DeviceType",(function(){return s})),r.d(t,"Width",(function(){return u})),r.d(t,"Height",(function(){return l})),r.d(t,"Orientation",(function(){return m})),r.d(t,"OperatingSystem",(function(){return f})),r.d(t,"OS",(function(){return h})),r.d(t,"Language",(function(){return g})),r.d(t,"BrandName",(function(){return p}));const a={Agent:navigator.userAgent,DeviceType:"",Width:innerWidth,Height:innerHeight,Orientation:"",OperatingSystem:"",Language:(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase(),BrandName:""},n={Bot:["bot","generator","http",".com",".net",".org",".io","preview","crawler","google page speed insight"],Television:["viera","netcast","boxee","kylo","roku","dlnadoc","ce-html"]};function o(e){return-1!=a.Agent.search(e)}function i(e){return-1!=a.Agent.toLowerCase().search(e)}for(let e=0;e<n.Bot.length;e++)1==i(n.Bot[e])&&(a.DeviceType="Bot");function c(){return a.Agent}function s(e){return void 0===e?a.DeviceType:-1!=a.DeviceType.search(e)}function u(){return a.Width}function l(){return a.Height}function m(){return a.Orientation}function f(e){return void 0===e?a.OperatingSystem:-1!=a.OperatingSystem.search(e)}"Bot"!=a.DeviceType&&("object"==typeof window.process?a.DeviceType="Node Webkit":1==o("TV")||1==function(){let e=!1;for(let t=0;t<n.Television.length;t++)1==i(n.Television[t])&&(e=!0);return e}()?a.DeviceType="Television":1==i("mobile")?a.DeviceType="Mobile":1==i("tablet")||1==i("touch")?a.DeviceType="Tablet":1==i("kiosk")?a.DeviceType="Kiosk":a.DeviceType="Desktop"),"Bot"==a.DeviceType?a.BrandName="Bot":1==o("Firefox")?a.BrandName="Mozilla Firefox":1==o("Edge")?a.BrandName="Microsoft Edge":1==o("Chrome")?a.BrandName="Google Chrome":1==o("Safari")?a.BrandName="Apple Safari":a.BrandName="Unknown",1==o("Windows")?a.OperatingSystem="Windows":1==o("Macintosh")||1==o("Mac OS")||1==o("OS X")?a.OperatingSystem="Macintosh":1==o("Android")?a.OperatingSystem="Android":1==o("CrOS")?a.OperatingSystem="ChromeOS":1==o("Linux")?a.OperatingSystem="Linux":a.OperatingSystem="Unknown",addEventListener("resize",(function(){a.Width=innerWidth,a.Height=innerHeight,a.Width<a.Height?a.Orientation="Portrait":a.Orientation="Landscape"}));const h=f;function g(e){return void 0===e?a.Language:-1!=a.Language.search(e)}function p(e){return void 0===e?a.BrandName:-1!=a.BrandName.search(e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"Status",(function(){return s})),r.d(t,"ExpireDuration",(function(){return u})),r.d(t,"Set",(function(){return m})),r.d(t,"Get",(function(){return f})),r.d(t,"Delete",(function(){return h})),r.d(t,"Del",(function(){return g})),r.d(t,"DeleteAll",(function(){return p})),r.d(t,"DelAll",(function(){return d})),r.d(t,"Rebirth",(function(){return b}));var a=!1;const n={ExpireDuration:31557600,Domain:location.hostname,Secure:!1};function o(){console.error("%cJavaScript Macro - Cookie","font-weight: bold;","\n","Cookie is not enabled/supported in this browser!")}function i(e,t){console.error("%cJavaScript Macro - Cookie","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string!')}function c(e,t){console.error("%cJavaScript Macro - Cookie","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function s(){return a}function u(e){if(void 0===e)return n.ExpireDuration;!0===Number.isSafeInteger(e)&&e>0?n.ExpireDuration=e:console.error("%cJavaScript Macro - Cookie","font-weight: bold;","\n",'Invalid expire duration "'+JSON.stringify(e)+'"! Expire duration must be type of number, safe integer, and larger than 0!')}function l(e,t,r){let a;if(!0===r||"Decay"===r){a=new Date(0).toUTCString()}else{let e=new Date;e.setTime(e.getTime()+1e3*n.ExpireDuration),a=e.toUTCString()}let o=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; expires="+a+"; domain="+n.Domain+"; path=/";!0===n.Secure&&(o+="; secure");try{document.cookie=o}catch(e){console.error("%cJavaScript Macro - Cookie","font-weight: bold;","\n",e)}}function m(e,t=null){1==a?"string"!=typeof e||"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t?("string"!=typeof e&&i("Set",e),"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t&&console.error("%cJavaScript Macro - Cookie","font-weight: bold;","\n",'Invalid value "'+JSON.stringify(t)+'" in "Set" request! Value must be type of string/number/boolean!')):l(e,t,!1):o()}function f(e){if(1!=a)return void o();let t=document.cookie,r={};if(""!==t){t=t.split(";");for(let e=0;e<t.length;e++){let a=t[e].split("=");for(;" "===a[0].charAt(0);)a[0]=a[0].substring(1);r[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}}if(void 0===e)return r;if("string"==typeof e)return r[e];if(!0===Array.isArray(e)){let t=[];for(let a=0;a<e.length;a++)"string"==typeof e[a]?t.push(r[e[a]]):(c("Get",e[a]),t.push(void 0));return t}i("Get",e)}function h(e){if(1==a)if("string"==typeof e)l(e,0,!0);else if(!0===Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?l(e[t],0,!0):c("Delete",e[t]);else i("Delete",e);else o()}1==navigator.cookieEnabled&&(a=!0),"https:"==location.protocol&&(n.Secure=!0);const g=h;function p(){if(1!=a)return void o();let e=Object.keys(f());for(let t=0;t<e.length;t++)l(e[t],0,!0)}const d=p;function b(){if(1!=a)return void o();let e=f(),t=Object.keys(e),r=Object.values(e);for(let e=0;e<t.length;e++)m(t[e],r[e])}},function(e,t,r){"use strict";r.r(t),r.d(t,"Status",(function(){return c})),r.d(t,"Set",(function(){return s})),r.d(t,"Get",(function(){return l})),r.d(t,"Delete",(function(){return f})),r.d(t,"Del",(function(){return h})),r.d(t,"DeleteAll",(function(){return g})),r.d(t,"DelAll",(function(){return p}));var a=!1;function n(){console.error("%cJavaScript Macro - Storage","font-weight: bold;","\n","Storage is not enabled/supported in this browser!")}function o(e,t){console.error("%cJavaScript Macro - Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string!')}function i(e,t){console.error("%cJavaScript Macro - Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function c(){return a}function s(e,t=null){if(1==a)if("string"==typeof e)try{localStorage.setItem(e,t)}catch(e){console.error("%cJavaScript Macro - Storage","font-weight: bold;","\n",e)}else o("Set",e);else n()}function u(e){return localStorage.getItem(e)}function l(e){if(1==a){if(void 0===e){let e={},t=localStorage.length;if(t>0)for(let r=0;r<t;r++){let t=localStorage.key(r);e[t]=u(t)}return e}if("string"==typeof e)return u(e);if(!0===Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(u(e[r])):(i("Get",e[r]),t.push(void 0));return t}o("Get",e)}else n()}function m(e){localStorage.removeItem(e)}function f(e){if(1==a)if("string"==typeof e)m(e);else if(!0===Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?m(e[t]):i("Delete",e[t]);else o("Delete",e);else n()}localStorage&&(a=!0);const h=f;function g(){1==a?localStorage.clear():n()}const p=g},function(e,t,r){"use strict";function a(e,t,r){console.error("%cJavaScript Macro - Converter","font-weight: bold;","\n",'Invalid input value "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input value must be type of '+r+"!")}function n(e,t){console.error("%cJavaScript Macro - Converter","font-weight: bold;","\n",'Invalid input unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input unit must be a standard unit!')}function o(e,t){console.error("%cJavaScript Macro - Converter","font-weight: bold;","\n",'Invalid output unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Output unit must be a standard unit!')}function i(e,t,r="K"){let i,c,s=!1;switch("number"!=typeof e&&(a("Temperature",e,"number"),s=!0,e=1),t){case"K":case"Kelvin":i=e;break;case"C":case"°C":case"℃":case"Celsius":i=e+273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":i=(e+459.67)/1.8;break;case"R":case"°R":case"Rankine":i=e/1.8;break;case"De":case"°De":case"Delisle":i=373.15-e/1.5;break;case"N":case"°N":case"Newton":i=e/.33+273.15;break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":i=1.25*e+273.15;break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":i=(e-7.5)/.525+273.15;break;default:n("Temperature",t),s=!0,i=1}switch(r){case"K":case"Kelvin":c=i;break;case"C":case"°C":case"℃":case"Celsius":c=i-273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":c=1.8*i-459.67;break;case"R":case"°R":case"Rankine":c=1.8*i;break;case"De":case"°De":case"Delisle":c=1.5*(373.15-i);break;case"N":case"°N":case"Newton":c=.33*(i-273.15);break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":c=.8*(i-273.15);break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":c=.525*(i-273.15)+7.5;break;default:o("Temperature",r),s=!0}return 1==s&&(c=void 0),c}function c(e,t,r="m"){let i,c,s=!1;switch("number"!=typeof e&&(a("Length",e,"number"),s=!0,e=1),t){case"m":case"Metre":case"Meter":i=e;break;case"Ym":case"Yottametre":case"Yottameter":i=e*Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":i=e*Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":i=e*Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":i=e*Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":i=e*Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":i=e*Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":i=e*Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":i=e*Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":i=e*Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":i=e*Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":i=e*Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":i=e*Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":i=e*Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":i=e*Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":i=e*Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":i=e*Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":i=e*Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":i=e*Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":i=e*Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":i=e*Math.pow(10,-24);break;case"in":case"Inch":i=.0254*e;break;case"yd":case"Yard":i=.9144*e;break;case"A":case"Å":case"Ångström":case"Angstrom":i=e*Math.pow(10,-10);break;case"ft":case"Foot":i=.3048*e;break;case"mi":case"Mile":i=1609.344*e;break;case"nmi":case"NM":case"M":case"Nautical":i=1852*e;break;case"ly":case"LightYear":i=e*(9.4607*Math.pow(10,15));break;case"Stud":i=.28*e;break;default:n("Length",t),s=!0,i=1}switch(r){case"m":case"Metre":case"Meter":c=i;break;case"Ym":case"Yottametre":case"Yottameter":c=i/Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":c=i/Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":c=i/Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":c=i/Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":c=i/Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":c=i/Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":c=i/Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":c=i/Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":c=i/Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":c=i/Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":c=i/Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":c=i/Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":c=i/Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":c=i/Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":c=i/Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":c=i/Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":c=i/Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":c=i/Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":c=i/Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":c=i/Math.pow(10,-24);break;case"in":case"Inch":c=i/.0254;break;case"yd":case"Yard":c=i/.9144;break;case"A":case"Å":case"Ångström":case"Angstrom":c=i/Math.pow(10,-10);break;case"ft":case"Foot":c=i/.3048;break;case"mi":case"Mile":c=i/1609.344;break;case"nmi":case"NM":case"M":case"Nautical":c=i/1852;break;case"ly":case"LightYear":c=i/(9.4607*Math.pow(10,15));break;case"Stud":c=i/.28;break;default:o("Length",r),s=!0}return 1==s&&(c=void 0),c}function s(e,t,r="R"){let i,c,s=!1;switch("number"!=typeof e&&(a("Angle",e,"number"),s=!0,e=1),t){case"rad":case"R":case"RAD":case"Radian":case"radian":i=e;break;case"°":case"D":case"Degree":case"degree":i=e*(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":i=e*(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":i=e*(2*Math.PI);break;default:n("Angle",t),s=!0,i=1}switch(r){case"rad":case"R":case"RAD":case"Radian":case"radian":c=i;break;case"°":case"D":case"Degree":case"degree":c=i/(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":c=i/(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":c=i/(2*Math.PI);break;default:o("Angle",r),s=!0}return 1==s&&(c=void 0),c}function u(e,t,r="kg"){let i,c,s=!1;switch("number"!=typeof e&&(a("Weight",e,"number"),s=!0,e=1),t){case"kg":case"㎏":case"Kilogram":i=e;break;case"g":case"Gram":i=e/1e3;break;case"t":case"Tonne":case"Mg":case"Megagram":i=1e3*e;break;case"斤":case"catty":case"Catty":i=.60478982*e;break;case"lb":case"Pound":i=e/2.20462262;break;case"兩":case"Tael":i=e/16*.60478982;break;case"錢":case"Mace":i=e/160*.60478982;break;case"oz":case"OZ":case"Ounce":i=28.349523125*e/1e3;break;case"eV":case"ElectronVolt":i=e*(1.783*Math.pow(10,-36));break;default:n("Weight",t),s=!0,i=1}switch(r){case"kg":case"㎏":case"Kilogram":c=i;break;case"g":case"Gram":c=1e3*i;break;case"t":case"Tonne":case"Mg":case"Megagram":c=i/1e3;break;case"斤":case"catty":case"Catty":c=i/.60478982;break;case"lb":case"Pound":c=2.20462262*i;break;case"兩":case"Tael":c=i/.60478982*16;break;case"錢":case"Mace":c=i/.60478982*160;break;case"oz":case"OZ":case"Ounce":c=i/28.349523125*1e3;break;case"eV":case"ElectronVolt":c=i/(1.783*Math.pow(10,-36));break;default:o("Weight",r),s=!0}return 1==s&&(c=void 0),c}function l(e,t,r=10){let n,o,i=!1;return!0===Number.isInteger(e)&&e>=0||"string"==typeof e&&"-"!==e.charAt(0)||(a("Radix",e,"number, integer, and positive number; or string"),i=!0,e=0),!0===Number.isInteger(t)&&t>=2&&t<=36&&!0===Number.isInteger(r)&&r>=2&&r<=36?(n=parseInt(e,t),!1===Number.isNaN(n)?(o=n.toString(r),r>=2&&r<=10&&(o=Number(o))):o=void 0):((!0!==Number.isInteger(t)||t<2||t>36)&&console.error("%cJavaScript Macro - Converter","font-weight: bold;","\n",'Invalid input unit "'+JSON.stringify(t)+'" in the "Radix" converter! Input unit must be type of number, integer, and between 2 and 36!'),(!0!==Number.isInteger(r)||r<2||r>36)&&console.error("%cJavaScript Macro - Converter","font-weight: bold;","\n",'Invalid output unit "'+JSON.stringify(r)+'" in the "Radix" converter! Output unit must be type of number, integer, and between 2 and 36!'),i=!0),1!=i&&!0!==Number.isNaN(o)||(o=void 0),o}function m(e){if("string"!=typeof e&&!0!==Array.isArray(e))return void console.error("%cJavaScript Macro - Converter","font-weight: bold;","\n",'Invalid input "'+JSON.stringify(e)+'" in the "To Object" converter! Input must be type of string/array!');let t={};for(let r=0;r<e.length;r++)t[r]=e[r];return t}r.r(t),r.d(t,"Temperature",(function(){return i})),r.d(t,"Length",(function(){return c})),r.d(t,"Angle",(function(){return s})),r.d(t,"Weight",(function(){return u})),r.d(t,"Radix",(function(){return l})),r.d(t,"ToObject",(function(){return m}))}])}));