!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var a in r)("object"==typeof exports?exports:e)[a]=r[a]}}(this,function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"SimplifyJavaScript",function(){return c}),r.d(t,"SJS",function(){return s});r(1);function a(e=-1){let t="0.0.50".split(".");return 1!=Number.isInteger(e)||e<=-1||e>=t.length?"0.0.50":t[e]}const n=r(2),o=r(3),c={Version:a,V:a,Test:function(e="Hello, developer!"){return console.log(e)},VirtualStorage:n,VStorage:n,Browser:{Information:o,Info:o,I:o,Cookie:r(4),Storage:r(5),WebRequest:r(6)},Converter:r(7)},s=c},function(e,t){Math.root=function(e,t){return Math.pow(e,1/t)},Math.gcd=function(){for(let e=0;e<arguments.length;e++)if("number"!=typeof arguments[e])return;if(2==arguments.length)return 0==arguments[1]?arguments[0]:Math.gcd(arguments[1],arguments[0]%arguments[1]);if(arguments.length>2){var e=Math.gcd(arguments[0],arguments[1]);for(let t=2;t<arguments.length;t++)e=Math.gcd(e,arguments[t]);return e}},Math.gcf=Math.gcd,Math.hcf=Math.gcd,Math.gcm=Math.gcd,Math.hcd=Math.gcd,Math.hypotenuse=function(e,t,r="h"){switch(r){case"h":return Math.sqrt(e*e+t*t);case"c":return Math.sqrt(e*e-t*t);default:return}},Math.antihypotenuse=function(e,t){return Math.hypotenuse(e,t,"c")}},function(e,t,r){"use strict";r.r(t),r.d(t,"Set",function(){return c}),r.d(t,"Get",function(){return i}),r.d(t,"Delete",function(){return l}),r.d(t,"Del",function(){return f}),r.d(t,"DeleteAll",function(){return m}),r.d(t,"DelAll",function(){return p});const a={};function n(e,t){console.error("%cSimplify JavaScript (SJS) - Virtual Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function o(e,t){console.error("%cSimplify JavaScript (SJS) - Virtual Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function c(e=null,t=null){"string"==typeof e?a[e]=t:n("Set",e)}function s(e){return a[e]}function i(e=null){if("string"==typeof e)return s(e);if(1==Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(s(e[r])):(o("Get",e[r]),t.push(void 0));return t}return null==e?a:void n("Get",e)}function u(e){delete a[e]}function l(e=null){if("string"==typeof e)u(e);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?u(e[t]):o("Delete",e[t]);else n("Delete",e)}function f(e=null){return l(e)}function m(){let e=Object.keys(a);for(let t=0;t<e.length;t++)u(e[t])}function p(){return m()}},function(e,t,r){"use strict";r.r(t),r.d(t,"Agent",function(){return s}),r.d(t,"DeviceType",function(){return i}),r.d(t,"Width",function(){return u}),r.d(t,"Height",function(){return l}),r.d(t,"Orientation",function(){return f}),r.d(t,"OperatingSystem",function(){return m}),r.d(t,"OS",function(){return p}),r.d(t,"Language",function(){return d}),r.d(t,"BrandName",function(){return g});const a={Agent:navigator.userAgent,DeviceType:"",Width:innerWidth,Height:innerHeight,Orientation:"",OperatingSystem:"",Language:(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase(),BrandName:""},n={Bot:["bot","generator","http",".com",".net",".org",".io","preview","crawler","google page speed insight"],Television:["viera","netcast","boxee","kylo","roku","dlnadoc","ce-html"]};function o(e){return-1!=a.Agent.search(e)}function c(e){return-1!=a.Agent.toLowerCase().search(e)}for(let e=0;e<n.Bot.length;e++)1==c(n.Bot[e])&&(a.DeviceType="Bot");function s(){return a.Agent}function i(e=null){return null==e?a.DeviceType:-1!=a.DeviceType.search(e)}function u(){return a.Width}function l(){return a.Height}function f(){return a.Orientation}function m(e=null){return null==e?a.OperatingSystem:-1!=a.OperatingSystem.search(e)}function p(e=null){return m(e)}function d(e=null){return null==e?a.Language:-1!=a.Language.search(e)}function g(e=null){return null==e?a.BrandName:-1!=a.BrandName.search(e)}"Bot"!=a.DeviceType&&("object"==typeof window.process?a.DeviceType="Node Webkit":1==o("TV")||1==function(){let e=!1;for(let t=0;t<n.Television.length;t++)1==c(n.Television[t])&&(e=!0);return e}()?a.DeviceType="Television":1==c("mobile")?a.DeviceType="Mobile":1==c("tablet")||1==c("touch")?a.DeviceType="Tablet":1==c("kiosk")?a.DeviceType="Kiosk":a.DeviceType="Desktop"),"Bot"==a.DeviceType?a.BrandName="Bot":1==o("Firefox")?a.BrandName="Mozilla Firefox":1==o("Edge")?a.BrandName="Microsoft Edge":1==o("Chrome")?a.BrandName="Google Chrome":1==o("Safari")?a.BrandName="Apple Safari":a.BrandName="Unknown",1==o("Windows")?a.OperatingSystem="Windows":1==o("Macintosh")||1==o("Mac OS")||1==o("OS X")?a.OperatingSystem="Macintosh":1==o("Android")?a.OperatingSystem="Android":1==o("CrOS")?a.OperatingSystem="ChromeOS":1==o("Linux")?a.OperatingSystem="Linux":a.OperatingSystem="Unknown",addEventListener("resize",function(){a.Width=innerWidth,a.Height=innerHeight,a.Width<a.Height?a.Orientation="Portrait":a.Orientation="Landscape"})},function(e,t,r){"use strict";r.r(t),r.d(t,"Stat",function(){return f}),r.d(t,"ExpireDuration",function(){return m}),r.d(t,"Set",function(){return d}),r.d(t,"Get",function(){return g}),r.d(t,"Delete",function(){return h}),r.d(t,"Del",function(){return b}),r.d(t,"DeleteAll",function(){return y}),r.d(t,"DelAll",function(){return k}),r.d(t,"Rebirth",function(){return S});const a=navigator.cookieEnabled,n=location.protocol,o=location.hostname;var c,s=31557600;function i(){console.error("%cSimplify JavaScript (SJS) - Browser - Cookie","font-weight: bold;","\n","Cookie is not enabled/supported in this browser! Ignored request.")}function u(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Cookie","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function l(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Cookie","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function f(){return a}function m(e=null){if("number"==typeof e&&Number.isSafeInteger(e)&&e>0)s=e;else{if(null==e)return s;console.warn('[Simplify JavaScript - Browser - Cookie] Invalid expire duration "'+JSON.stringify(e)+'"! Expire duration must be type of number, safe integer and larger than 0! Ignored request.')}}function p(e,t,r=!1){let a;if(1==r){a=new Date(0).toUTCString()}else{let e=new Date;e.setTime(e.getTime()+1e3*s),a=e.toUTCString()}let n=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; expires="+a+"; domain="+o+"; path=/";1==c&&(n+="; secure"),document.cookie=n}function d(e=null,t=null){1==a?"string"!=typeof e||"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t?("string"!=typeof e&&u("Set",e),"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t&&console.warn('[Simplify JavaScript - Browser - Cookie] Invalid value "'+JSON.stringify(t)+'" in "Set" request! Value must be type of string/number/boolean! Ignored request.')):p(e,t,!1):i()}function g(e=null){if(1==a){let t=document.cookie,r={};if((t=t.split(";")).length>0)for(let e=0;e<t.length;e++){let a=t[e].split("=");for(;" "==a[0].charAt(0);)a[0]=a[0].substring(1);r[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}if("string"==typeof e)return r[e];if(1==Array.isArray(e)){let t=[];for(let a=0;a<e.length;a++)"string"==typeof e[a]?t.push(r[e[a]]):(l("Get",e[a]),t.push(void 0));return t}return null==e?r:void u("Get",e)}i()}function h(e=null){if(1==a)if("string"==typeof e)p(e,0,!0);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?p(e[t],0,!0):l("Delete",e[t]);else u("Delete",e);else i()}function b(e=null){return h(e)}function y(){if(1==a){let e=Object.keys(g());for(let t=0;t<e.length;t++)p(e[t],0,!0)}else i()}function k(){return y()}function S(){if(1==a){let e=g(),t=Object.keys(e),r=Object.values(e);for(let e=0;e<t.length;e++)d(t[e],r[e])}else i()}c="https:"==n},function(e,t,r){"use strict";var a;function n(){console.error("%cSimplify JavaScript (SJS) - Browser - Storage","font-weight: bold;","\n","Storage is not enabled/supported in this browser! Ignored request.")}function o(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function c(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function s(){return a}function i(e=null,t=null){if(1==a)if("string"==typeof e)try{localStorage.setItem(e,t)}catch(e){console.warn("[Simplify JavaScript - Browser - Storage] "+e)}else o("Set",e);else n()}function u(e){return localStorage.getItem(e)}function l(e=null){if(1!=a)n();else{if("string"==typeof e)return u(e);if(1==Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(u(e[r])):(c("Get",e[r]),t.push(void 0));return t}if(null==e){let e={},t=localStorage.length;if(t>0)for(let r=0;r<t;r++){let t=localStorage.key(r);e[t]=u(t)}return e}o("Get",e)}}function f(e){localStorage.removeItem(e)}function m(e=null){if(1==a)if("string"==typeof e)f(e);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?f(e[t]):c("Delete",e[t]);else o("Delete",e);else n()}function p(e=null){return m(e)}function d(){1==a?localStorage.clear():n()}function g(){return d()}r.r(t),r.d(t,"Stat",function(){return s}),r.d(t,"Set",function(){return i}),r.d(t,"Get",function(){return l}),r.d(t,"Delete",function(){return m}),r.d(t,"Del",function(){return p}),r.d(t,"DeleteAll",function(){return d}),r.d(t,"DelAll",function(){return g}),a=!!localStorage},function(e,t){},function(e,t,r){"use strict";function a(e,t,r){console.error("%cSimplify JavaScript (SJS) - Converter","font-weight: bold;","\n",'Unknown input value "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input value must be type of '+r+"! Ignored request.")}function n(e,t){console.error("%cSimplify JavaScript (SJS) - Converter","font-weight: bold;","\n",'Unknown input unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input unit must be a standard unit! Ignored request.')}function o(e,t){console.error("%cSimplify JavaScript (SJS) - Converter","font-weight: bold;","\n",'Unknown output unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Output unit must be a standard unit! Ignored request.')}function c(e,t,r="K"){let c,s;if("number"==typeof e){switch(t){case"K":case"Kelvin":c=e;break;case"C":case"°C":case"℃":case"Celsius":c=e+273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":c=(e+459.67)*(5/9);break;case"R":case"°R":case"Rankine":c=e*(5/9);break;case"De":case"°De":case"Delisle":c=373.15-e*(2/3);break;case"N":case"°N":case"Newton":c=e*(100/33)+273.15;break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":c=e*(5/4)+273.15;break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":c=40/21*(e-7.5)+273.15;break;default:n("Temperature",t),s=void 0}switch(r){case"K":case"Kelvin":s=c;break;case"C":case"°C":case"℃":case"Celsius":s=c-273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":s=1.8*c-459.67;break;case"R":case"°R":case"Rankine":s=1.8*c;break;case"De":case"°De":case"Delisle":s=1.5*(373.15-c);break;case"N":case"°N":case"Newton":s=.33*(c-273.15);break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":s=.8*(c-273.15);break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":s=.525*(c-273.15)+7.5;break;default:o("Temperature",r),s=void 0}}else a("Temperature",e,"number"),s=void 0;return null==s&&(s=void 0),s}function s(e,t,r="m"){let c,s;if("number"==typeof e){switch(t){case"m":case"Metre":case"Meter":c=e;break;case"Ym":case"Yottametre":case"Yottameter":c=e*Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":c=e*Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":c=e*Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":c=e*Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":c=e*Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":c=e*Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":c=e*Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":c=e*Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":c=e*Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":c=e*Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":c=e*Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":c=e*Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":c=e*Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":c=e*Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":c=e*Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":c=e*Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":c=e*Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":c=e*Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":c=e*Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":c=e*Math.pow(10,-24);break;case"in":case"Inch":case"inch":c=.0254*e;break;case"yd":case"Yard":case"yard":c=.9144*e;break;case"A":case"Å":case"Ångström":case"Angstrom":c=e*Math.pow(10,-10);break;case"ft":case"Foot":case"foot":c=.3048*e;break;case"mi":case"Mile":case"mile":c=1609.344*e;break;case"nmi":case"NM":case"M":case"Nautical":c=1852*e;break;case"ly":case"LightYear":c=e*(9.4607*Math.pow(10,15));break;default:n("Length",t),s=void 0}switch(r){case"m":case"Metre":case"Meter":s=c;break;case"Ym":case"Yottametre":case"Yottameter":s=c/Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":s=c/Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":s=c/Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":s=c/Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":s=c/Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":s=c/Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":s=c/Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":s=c/Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":s=c/Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":s=c/Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":s=c/Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":s=c/Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":s=c/Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":s=c/Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":s=c/Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":s=c/Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":s=c/Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":s=c/Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":s=c/Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":s=c/Math.pow(10,-24);break;case"in":case"Inch":case"inch":s=c/.0254;break;case"yd":case"Yard":case"yard":s=c/.9144;break;case"A":case"Å":case"Ångström":case"Angstrom":s=c/Math.pow(10,-10);break;case"ft":case"Foot":case"foot":s=c/.3048;break;case"mi":case"Mile":case"mile":s=c/1609.344;break;case"nmi":case"NM":case"M":case"Nautical":s=c/1852;break;case"ly":case"LightYear":s=c/(9.4607*Math.pow(10,15));break;default:o("Length",r),s=void 0}}else a("Length",e,"number"),s=void 0;return null==s&&(s=void 0),s}function i(e,t,r="R"){let c,s;if("number"==typeof e){switch(t){case"rad":case"R":case"RAD":case"Radian":case"radian":c=e;break;case"°":case"D":case"Degree":case"degree":c=e*(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":c=e*(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":c=e*(2*Math.PI);break;default:n("Angle",t),s=void 0}switch(r){case"rad":case"R":case"RAD":case"Radian":case"radian":s=c;break;case"°":case"D":case"Degree":case"degree":s=c/(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":s=c/(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":s=c/(2*Math.PI);break;default:o("Angle",r),s=void 0}}else a("Angle",e,"number"),s=void 0;return null==s&&(s=void 0),s}r.r(t),r.d(t,"Temperature",function(){return c}),r.d(t,"Length",function(){return s}),r.d(t,"Angle",function(){return i})}])});