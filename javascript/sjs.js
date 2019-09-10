!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(window,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"SimplifyJavaScript",function(){return c}),r.d(t,"SJS",function(){return i});r(1);function a(e=-1){let t="0.0.25".split(".");return 1!=Number.isInteger(e)||e<=-1||e>=t.length?"0.0.25":t[e]}const n=r(2),o=r(3),c={Version:a,V:a,Test:function(e="Hello, developer!"){return console.log(e)},VirtualStorage:n,VStorage:n,Browser:{Information:o,Info:o,I:o,Cookie:r(4),Storage:r(5),WebRequest:r(6)},Converter:r(7)},i=c},function(e,t){Math.root=function(e,t){return Math.pow(e,1/t)},Math.gcd=function(){for(let e=0;e<arguments.length;e++)if("number"!=typeof arguments[e])return;if(2==arguments.length)return 0==arguments[1]?arguments[0]:Math.gcd(arguments[1],arguments[0]%arguments[1]);if(arguments.length>2){var e=Math.gcd(arguments[0],arguments[1]);for(let t=2;t<arguments.length;t++)e=Math.gcd(e,arguments[t]);return e}},Math.gcf=Math.gcd,Math.hcf=Math.gcd,Math.gcm=Math.gcd,Math.hcd=Math.gcd,Math.hypotenuse=function(e,t,r="h"){switch(r){case"h":return Math.sqrt(e*e+t*t);case"c":return Math.sqrt(e*e-t*t);default:return}},Math.antihypotenuse=function(e,t){return Math.hypotenuse(e,t,"c")}},function(e,t,r){"use strict";r.r(t),r.d(t,"Set",function(){return c}),r.d(t,"Get",function(){return s}),r.d(t,"Delete",function(){return l}),r.d(t,"Del",function(){return m}),r.d(t,"DeleteAll",function(){return f}),r.d(t,"DelAll",function(){return p});const a={};function n(e,t){console.warn('[Simplify JavaScript - Virtual Storage] Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function o(e,t){console.warn('[Simplify JavaScript - Virtual Storage] Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function c(e=null,t=null){"string"==typeof e?a[e]=t:n("Set",e)}function i(e){return a[e]}function s(e=null){if("string"==typeof e)return i(e);if(1==Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(i(e[r])):(o("Get",e[r]),t.push(void 0));return t}return null==e?a:void n("Get",e)}function u(e){delete a[e]}function l(e=null){if("string"==typeof e)u(e);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?u(e[t]):o("Delete",e[t]);else n("Delete",e)}function m(e=null){return l(e)}function f(){let e=Object.keys(a);for(let t=0;t<e.length;t++)u(e[t])}function p(){return f()}},function(e,t,r){"use strict";r.r(t),r.d(t,"Agent",function(){return i}),r.d(t,"DeviceType",function(){return s}),r.d(t,"Width",function(){return u}),r.d(t,"Height",function(){return l}),r.d(t,"Orientation",function(){return m}),r.d(t,"OperatingSystem",function(){return f}),r.d(t,"Language",function(){return p}),r.d(t,"BrandName",function(){return g});const a={Agent:navigator.userAgent,DeviceType:"",Width:innerWidth,Height:innerHeight,Orientation:"",OperatingSystem:"",Language:(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase(),BrandName:""},n={Bot:["bot","generator","http",".com",".net",".org",".io","preview","crawler","google page speed insight"],Television:["viera","netcast","boxee","kylo","roku","dlnadoc","ce-html"]};function o(e){return-1!=a.Agent.search(e)}function c(e){return-1!=a.Agent.toLowerCase().search(e)}for(let e=0;e<n.Bot.length;e++)1==c(n.Bot[e])&&(a.DeviceType="Bot");function i(){return a.Agent}function s(e=null){return null==e?a.DeviceType:-1!=a.DeviceType.search(e)}function u(){return a.Width}function l(){return a.Height}function m(){return a.Orientation}function f(e=null){return null==e?a.OperatingSystem:-1!=a.OperatingSystem.search(e)}function p(e=null){return null==e?a.Language:-1!=a.Language.search(e)}function g(e=null){return null==e?a.BrandName:-1!=a.BrandName.search(e)}"Bot"!=a.DeviceType&&("object"==typeof window.process?a.DeviceType="Node Webkit":1==o("TV")||1==function(){let e=!1;for(let t=0;t<n.Television.length;t++)1==c(n.Television[t])&&(e=!0);return e}()?a.DeviceType="Television":1==c("mobile")?a.DeviceType="Mobile":1==c("tablet")||1==c("touch")?a.DeviceType="Tablet":1==c("kiosk")?a.DeviceType="Kiosk":a.DeviceType="Desktop"),"Bot"==a.DeviceType?a.BrandName="Bot":1==o("Firefox")?a.BrandName="Mozilla Firefox":1==o("Edge")?a.BrandName="Microsoft Edge":1==o("Chrome")?a.BrandName="Google Chrome":1==o("Safari")?a.BrandName="Apple Safari":a.BrandName="Unknown",1==o("Windows")?a.OperatingSystem="Windows":1==o("Macintosh")||1==o("Mac OS")||1==o("OS X")?a.OperatingSystem="Macintosh":1==o("Android")?a.OperatingSystem="Android":1==o("CrOS")?a.OperatingSystem="ChromeOS":1==o("Linux")?a.OperatingSystem="Linux":a.OperatingSystem="Unknown",addEventListener("resize",function(){a.Width=innerWidth,a.Height=innerHeight,a.Width<a.Height?a.Orientation="Portrait":a.Orientation="Landscape"})},function(e,t,r){"use strict";r.r(t),r.d(t,"Stat",function(){return m}),r.d(t,"ExpireDuration",function(){return f}),r.d(t,"Set",function(){return g}),r.d(t,"Get",function(){return d}),r.d(t,"Delete",function(){return h}),r.d(t,"Del",function(){return y}),r.d(t,"DeleteAll",function(){return b}),r.d(t,"DelAll",function(){return M}),r.d(t,"Rebirth",function(){return k});const a=navigator.cookieEnabled,n=location.protocol,o=location.hostname;var c,i=31557600;function s(){console.warn("[Simplify JavaScript - Browser - Cookie] Cookie is not enabled/supported in this browser! Ignored request.")}function u(e,t){console.warn('[Simplify JavaScript - Browser - Cookie] Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function l(e,t){console.warn('[Simplify JavaScript - Virtual Storage] Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function m(){return a}function f(e=null){if("number"==typeof e&&Number.isSafeInteger(e)&&e>0)i=e;else{if(null==e)return i;console.warn('[Simplify JavaScript - Browser - Cookie] Invalid expire duration "'+JSON.stringify(e)+'"! Expire duration must be type of number, safe integer and larger than 0! Ignored request.')}}function p(e,t,r=!1){let a;if(1==r){a=new Date(0).toUTCString()}else{let e=new Date;e.setTime(e.getTime()+1e3*i),a=e.toUTCString()}let n=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; expires="+a+"; domain="+o+"; path=/";1==c&&(n+="; secure"),document.cookie=n}function g(e=null,t=null){1==a?"string"!=typeof e||"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t?("string"!=typeof e&&u("Set",e),"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t&&console.warn('[Simplify JavaScript - Browser - Cookie] Invalid value "'+JSON.stringify(t)+'" in "Set" request! Value must be type of string/number/boolean! Ignored request.')):p(e,t,!1):s()}function d(e=null){if(1==a){let t=document.cookie,r={};if((t=t.split(";")).length>0)for(let e=0;e<t.length;e++){let a=t[e].split("=");for(;" "==a[0].charAt(0);)a[0]=a[0].substring(1);r[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}if("string"==typeof e)return r[e];if(1==Array.isArray(e)){let t=[];for(let a=0;a<e.length;a++)"string"==typeof e[a]?t.push(r[e[a]]):(l("Get",e[a]),t.push(void 0));return t}return null==e?r:void u("Get",e)}s()}function h(e=null){if(1==a)if("string"==typeof e)p(e,0,!0);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?p(e[t],0,!0):l("Delete",e[t]);else u("Delete",e);else s()}function y(e=null){return h(e)}function b(){if(1==a){let e=Object.keys(d());for(let t=0;t<e.length;t++)p(e[t],0,!0)}else s()}function M(){return b()}function k(){if(1==a){let e=d(),t=Object.keys(e),r=Object.values(e);for(let e=0;e<t.length;e++)g(t[e],r[e])}else s()}c="https:"==n},function(e,t,r){"use strict";var a;function n(){console.warn("[Simplify JavaScript - Browser - Storage] Storage is not enabled/supported in this browser! Ignored request.")}function o(e,t){console.warn('[Simplify JavaScript - Browser - Storage] Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function c(e,t){console.warn('[Simplify JavaScript - Virtual Storage] Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function i(){return a}function s(e=null,t=null){if(1==a)if("string"==typeof e)try{localStorage.setItem(e,t)}catch(e){console.warn("[Simplify JavaScript - Browser - Storage] "+e)}else o("Set",e);else n()}function u(e){return localStorage.getItem(e)}function l(e=null){if(1!=a)n();else{if("string"==typeof e)return u(e);if(1==Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(u(e[r])):(c("Get",e[r]),t.push(void 0));return t}if(null==e){let e={},t=localStorage.length;if(t>0)for(let r=0;r<t;r++){let t=localStorage.key(r);e[t]=u(t)}return e}o("Get",e)}}function m(e){localStorage.removeItem(e)}function f(e=null){if(1==a)if("string"==typeof e)m(e);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?m(e[t]):c("Delete",e[t]);else o("Delete",e);else n()}function p(e=null){return f(e)}function g(){1==a?localStorage.clear():n()}function d(){return g()}r.r(t),r.d(t,"Stat",function(){return i}),r.d(t,"Set",function(){return s}),r.d(t,"Get",function(){return l}),r.d(t,"Delete",function(){return f}),r.d(t,"Del",function(){return p}),r.d(t,"DeleteAll",function(){return g}),r.d(t,"DelAll",function(){return d}),a=!!localStorage},function(e,t){},function(e,t,r){"use strict";function a(e,t,r,a,n,o){return function(e,t,r){return typeof t==r||(console.warn('[Simplify JavaScript - Converter] Unknown input value "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input value must be type of '+r+"! Ignored request."),!1)}(e,t,r)&&function(e,t,r){return"string"==typeof t&&1==r.includes(t)||(console.warn('[Simplify JavaScript - Converter] Unknown input unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input unit must be a standard unit! Ignored request.'),!1)}(e,a,o)&&function(e,t,r){return"string"==typeof t&&1==r.includes(t)||(console.warn('[Simplify JavaScript - Converter] Unknown output unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Output unit must be a standard unit! Ignored request.'),!1)}(e,n,o)}function n(e,t,r="K"){if(1==a("temperature",e,"number",t,r,["K","Kelvin","C","°C","℃","Celsius","F","°F","℉","Fahrenheit","R","°R","Rankine","De","°De","Delisle","N","°N","Newton","Re","°Re","Ré","°Ré","Réaumur","Reaumur","Ro","°Ro","Rø","°Rø","Rømer","Romer"])){let a,n;switch(t){case"C":case"°C":case"℃":case"Celsius":a=e+273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":a=(e+459.67)*(5/9);break;case"R":case"°R":case"Rankine":a=e*(5/9);break;case"De":case"°De":case"Delisle":a=373.15-e*(2/3);break;case"N":case"°N":case"Newton":a=e*(100/33)+273.15;break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":a=e*(5/4)+273.15;break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":a=40/21*(e-7.5)+273.15}switch(r){case"C":case"°C":case"℃":case"Celsius":n=a-273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":n=1.8*a-459.67;break;case"R":case"°R":case"Rankine":n=1.8*a;break;case"De":case"°De":case"Delisle":n=1.5*(373.15-a);break;case"N":case"°N":case"Newton":n=.33*(a-273.15);break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":n=.8*(a-273.15);break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":n=.525*(a-273.15)+7.5}return n}}function o(e,t,r="m"){if(1==a("length",e,"number",t,r,["m","Metre","Meter","Ym","Yottametre","Yottameter","Zm","Zettametre","Zettameter","Em","Exametre","Exameter","Pm","Petametre","Petameter","Tm","Terametre","Terameter","Gm","Gigametre","Gigameter","Mm","Megametre","Megameter","km","㎞","㏎","Kilometre","Kilometer","hm","Hectometre","Hectometer","dam","Decametre","Decameter","dm","Decimetre","Decimeter","cm","㎝","Centimetre","Centimeter","mm","㎜","Millimetre","Millimeter","um","µm","Micrometre","Micrometer","nm","Nanometre","Nanometer","pm","Picometre","Picometer","fm","Femtometre","Femtometer","am","Attometre","Attometer","zm","Zeptometre","Zeptometer","ym","Yoctometre","Yoctometer","in","Inch","inch","yd","Yard","yard","A","Å","Ångström","Angstrom","ft","Foot","foot","mi","Mile","mile","nmi","NM","M","Nautical","ly","LightYear"])){let a,n;switch(t){case"Ym":case"Yottametre":case"Yottameter":a=e*Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":a=e*Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":a=e*Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":a=e*Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":a=e*Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":a=e*Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":a=e*Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":a=e*Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":a=e*Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":a=e*Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":a=e*Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":a=e*Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":a=e*Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":a=e*Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":a=e*Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":a=e*Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":a=e*Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":a=e*Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":a=e*Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":a=e*Math.pow(10,-24);break;case"in":case"Inch":case"inch":a=.0254*e;break;case"yd":case"Yard":case"yard":a=.9144*e;break;case"A":case"Å":case"Ångström":case"Angstrom":a=e*Math.pow(10,-10);break;case"ft":case"Foot":case"foot":a=.3048*e;break;case"mi":case"Mile":case"mile":a=1609.344*e;break;case"nmi":case"NM":case"M":case"Nautical":a=1852*e;break;case"ly":case"LightYear":a=e*(9.4607*Math.pow(10,15))}switch(r){case"Ym":case"Yottametre":case"Yottameter":n=a/Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":n=a/Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":n=a/Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":n=a/Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":n=a/Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":n=a/Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":n=a/Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":n=a/Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":n=a/Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":n=a/Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":n=a/Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":n=a/Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":n=a/Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":n=a/Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":n=a/Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":n=a/Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":n=a/Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":n=a/Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":n=a/Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":n=a/Math.pow(10,-24);break;case"in":case"Inch":case"inch":n=a/.0254;break;case"yd":case"Yard":case"yard":n=a/.9144;break;case"A":case"Å":case"Ångström":case"Angstrom":n=a/Math.pow(10,-10);break;case"ft":case"Foot":case"foot":n=a/.3048;break;case"mi":case"Mile":case"mile":n=a/1609.344;break;case"nmi":case"NM":case"M":case"Nautical":n=a/1852;break;case"ly":case"LightYear":n=a/(9.4607*Math.pow(10,15))}return n}}function c(e,t,r="R"){if(1==a("angle",e,"number",t,r,["rad","R","RAD","Radian","radian","°","D","Degree","degree","g","G","gon","ᵍ","grad","grade","Gradian","gradian","tr","T","pla","Turn","turn"])){let a,n;switch(t){case"°":case"D":case"Degree":case"degree":a=e*(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":a=e*(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":a=e*(2*Math.PI)}switch(r){case"°":case"D":case"Degree":case"degree":n=a/(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":n=a/(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":n=a/(2*Math.PI)}return n}}r.r(t),r.d(t,"Temperature",function(){return n}),r.d(t,"Length",function(){return o}),r.d(t,"Angle",function(){return c})}])});