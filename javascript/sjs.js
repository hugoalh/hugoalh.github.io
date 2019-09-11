!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var r in a)("object"==typeof exports?exports:e)[r]=a[r]}}(this,function(){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"SimplifyJavaScript",function(){return o}),a.d(t,"SJS",function(){return s});a(1);function r(e=-1){let t="0.0.60".split(".");return 1!=Number.isInteger(e)||e<=-1||e>=t.length?"0.0.60":t[e]}const n=a(2),c=a(3),o={Version:r,V:r,Test:function(e="Hello, developer!"){return console.log(e)},VirtualStorage:n,VStorage:n,Browser:{Information:c,Info:c,I:c,Cookie:a(4),Storage:a(5),WebRequest:a(6)},Converter:a(7)},s=o},function(e,t){Math.root=function(e,t){return Math.pow(e,1/t)},Math.gcd=function(){for(let e=0;e<arguments.length;e++)if("number"!=typeof arguments[e])return;if(2==arguments.length)return 0==arguments[1]?arguments[0]:Math.gcd(arguments[1],arguments[0]%arguments[1]);if(arguments.length>2){var e=Math.gcd(arguments[0],arguments[1]);for(let t=2;t<arguments.length;t++)e=Math.gcd(e,arguments[t]);return e}},Math.gcf=Math.gcd,Math.hcf=Math.gcd,Math.gcm=Math.gcd,Math.hcd=Math.gcd,Math.hypotenuse=function(e,t,a="h"){switch(a){case"h":return Math.sqrt(e*e+t*t);case"c":return Math.sqrt(e*e-t*t);default:return}},Math.antihypotenuse=function(e,t){return Math.hypotenuse(e,t,"c")}},function(e,t,a){"use strict";a.r(t),a.d(t,"Set",function(){return o}),a.d(t,"Get",function(){return i}),a.d(t,"Delete",function(){return l}),a.d(t,"Del",function(){return f}),a.d(t,"DeleteAll",function(){return m}),a.d(t,"DelAll",function(){return g});const r={};function n(e,t){console.error("%cSimplify JavaScript (SJS) - Virtual Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function c(e,t){console.error("%cSimplify JavaScript (SJS) - Virtual Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function o(e=null,t=null){"string"==typeof e?r[e]=t:n("Set",e)}function s(e){return r[e]}function i(e=null){if("string"==typeof e)return s(e);if(1==Array.isArray(e)){let t=[];for(let a=0;a<e.length;a++)"string"==typeof e[a]?t.push(s(e[a])):(c("Get",e[a]),t.push(void 0));return t}return null==e?r:void n("Get",e)}function u(e){delete r[e]}function l(e=null){if("string"==typeof e)u(e);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?u(e[t]):c("Delete",e[t]);else n("Delete",e)}function f(e=null){return l(e)}function m(){let e=Object.keys(r);for(let t=0;t<e.length;t++)u(e[t])}function g(){return m()}},function(e,t,a){"use strict";a.r(t),a.d(t,"Agent",function(){return s}),a.d(t,"DeviceType",function(){return i}),a.d(t,"Width",function(){return u}),a.d(t,"Height",function(){return l}),a.d(t,"Orientation",function(){return f}),a.d(t,"OperatingSystem",function(){return m}),a.d(t,"OS",function(){return g}),a.d(t,"Language",function(){return p}),a.d(t,"BrandName",function(){return d});const r={Agent:navigator.userAgent,DeviceType:"",Width:innerWidth,Height:innerHeight,Orientation:"",OperatingSystem:"",Language:(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase(),BrandName:""},n={Bot:["bot","generator","http",".com",".net",".org",".io","preview","crawler","google page speed insight"],Television:["viera","netcast","boxee","kylo","roku","dlnadoc","ce-html"]};function c(e){return-1!=r.Agent.search(e)}function o(e){return-1!=r.Agent.toLowerCase().search(e)}for(let e=0;e<n.Bot.length;e++)1==o(n.Bot[e])&&(r.DeviceType="Bot");function s(){return r.Agent}function i(e=null){return null==e?r.DeviceType:-1!=r.DeviceType.search(e)}function u(){return r.Width}function l(){return r.Height}function f(){return r.Orientation}function m(e=null){return null==e?r.OperatingSystem:-1!=r.OperatingSystem.search(e)}function g(e=null){return m(e)}function p(e=null){return null==e?r.Language:-1!=r.Language.search(e)}function d(e=null){return null==e?r.BrandName:-1!=r.BrandName.search(e)}"Bot"!=r.DeviceType&&("object"==typeof window.process?r.DeviceType="Node Webkit":1==c("TV")||1==function(){let e=!1;for(let t=0;t<n.Television.length;t++)1==o(n.Television[t])&&(e=!0);return e}()?r.DeviceType="Television":1==o("mobile")?r.DeviceType="Mobile":1==o("tablet")||1==o("touch")?r.DeviceType="Tablet":1==o("kiosk")?r.DeviceType="Kiosk":r.DeviceType="Desktop"),"Bot"==r.DeviceType?r.BrandName="Bot":1==c("Firefox")?r.BrandName="Mozilla Firefox":1==c("Edge")?r.BrandName="Microsoft Edge":1==c("Chrome")?r.BrandName="Google Chrome":1==c("Safari")?r.BrandName="Apple Safari":r.BrandName="Unknown",1==c("Windows")?r.OperatingSystem="Windows":1==c("Macintosh")||1==c("Mac OS")||1==c("OS X")?r.OperatingSystem="Macintosh":1==c("Android")?r.OperatingSystem="Android":1==c("CrOS")?r.OperatingSystem="ChromeOS":1==c("Linux")?r.OperatingSystem="Linux":r.OperatingSystem="Unknown",addEventListener("resize",function(){r.Width=innerWidth,r.Height=innerHeight,r.Width<r.Height?r.Orientation="Portrait":r.Orientation="Landscape"})},function(e,t,a){"use strict";a.r(t),a.d(t,"Stat",function(){return f}),a.d(t,"ExpireDuration",function(){return m}),a.d(t,"Set",function(){return p}),a.d(t,"Get",function(){return d}),a.d(t,"Delete",function(){return h}),a.d(t,"Del",function(){return b}),a.d(t,"DeleteAll",function(){return y}),a.d(t,"DelAll",function(){return k}),a.d(t,"Rebirth",function(){return S});const r=navigator.cookieEnabled,n=location.protocol,c=location.hostname;var o,s=31557600;function i(){console.error("%cSimplify JavaScript (SJS) - Browser - Cookie","font-weight: bold;","\n","Cookie is not enabled/supported in this browser! Ignored request.")}function u(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Cookie","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function l(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Cookie","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function f(){return r}function m(e=null){if("number"==typeof e&&Number.isSafeInteger(e)&&e>0)s=e;else{if(null==e)return s;console.warn('[Simplify JavaScript - Browser - Cookie] Invalid expire duration "'+JSON.stringify(e)+'"! Expire duration must be type of number, safe integer and larger than 0! Ignored request.')}}function g(e,t,a=!1){let r;if(1==a){r=new Date(0).toUTCString()}else{let e=new Date;e.setTime(e.getTime()+1e3*s),r=e.toUTCString()}let n=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; expires="+r+"; domain="+c+"; path=/";1==o&&(n+="; secure"),document.cookie=n}function p(e=null,t=null){1==r?"string"!=typeof e||"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t?("string"!=typeof e&&u("Set",e),"string"!=typeof t&&"number"!=typeof t&&"boolean"!=typeof t&&console.warn('[Simplify JavaScript - Browser - Cookie] Invalid value "'+JSON.stringify(t)+'" in "Set" request! Value must be type of string/number/boolean! Ignored request.')):g(e,t,!1):i()}function d(e=null){if(1==r){let t=document.cookie,a={};if((t=t.split(";")).length>0)for(let e=0;e<t.length;e++){let r=t[e].split("=");for(;" "==r[0].charAt(0);)r[0]=r[0].substring(1);a[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}if("string"==typeof e)return a[e];if(1==Array.isArray(e)){let t=[];for(let r=0;r<e.length;r++)"string"==typeof e[r]?t.push(a[e[r]]):(l("Get",e[r]),t.push(void 0));return t}return null==e?a:void u("Get",e)}i()}function h(e=null){if(1==r)if("string"==typeof e)g(e,0,!0);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?g(e[t],0,!0):l("Delete",e[t]);else u("Delete",e);else i()}function b(e=null){return h(e)}function y(){if(1==r){let e=Object.keys(d());for(let t=0;t<e.length;t++)g(e[t],0,!0)}else i()}function k(){return y()}function S(){if(1==r){let e=d(),t=Object.keys(e),a=Object.values(e);for(let e=0;e<t.length;e++)p(t[e],a[e])}else i()}o="https:"==n},function(e,t,a){"use strict";var r;function n(){console.error("%cSimplify JavaScript (SJS) - Browser - Storage","font-weight: bold;","\n","Storage is not enabled/supported in this browser! Ignored request.")}function c(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Ignored request.')}function o(e,t){console.error("%cSimplify JavaScript (SJS) - Browser - Storage","font-weight: bold;","\n",'Invalid key "'+JSON.stringify(t)+'" in "'+e+'" request! Key must be type of string! Pressed "undefined" as part of the result.')}function s(){return r}function i(e=null,t=null){if(1==r)if("string"==typeof e)try{localStorage.setItem(e,t)}catch(e){console.warn("[Simplify JavaScript - Browser - Storage] "+e)}else c("Set",e);else n()}function u(e){return localStorage.getItem(e)}function l(e=null){if(1!=r)n();else{if("string"==typeof e)return u(e);if(1==Array.isArray(e)){let t=[];for(let a=0;a<e.length;a++)"string"==typeof e[a]?t.push(u(e[a])):(o("Get",e[a]),t.push(void 0));return t}if(null==e){let e={},t=localStorage.length;if(t>0)for(let a=0;a<t;a++){let t=localStorage.key(a);e[t]=u(t)}return e}c("Get",e)}}function f(e){localStorage.removeItem(e)}function m(e=null){if(1==r)if("string"==typeof e)f(e);else if(1==Array.isArray(e))for(let t=0;t<e.length;t++)"string"==typeof e[t]?f(e[t]):o("Delete",e[t]);else c("Delete",e);else n()}function g(e=null){return m(e)}function p(){1==r?localStorage.clear():n()}function d(){return p()}a.r(t),a.d(t,"Stat",function(){return s}),a.d(t,"Set",function(){return i}),a.d(t,"Get",function(){return l}),a.d(t,"Delete",function(){return m}),a.d(t,"Del",function(){return g}),a.d(t,"DeleteAll",function(){return p}),a.d(t,"DelAll",function(){return d}),r=!!localStorage},function(e,t){},function(e,t,a){"use strict";function r(e,t,a){console.error("%cSimplify JavaScript (SJS) - Converter","font-weight: bold;","\n",'Unknown input value "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input value must be type of '+a+"! Ignored request.")}function n(e,t){console.error("%cSimplify JavaScript (SJS) - Converter","font-weight: bold;","\n",'Unknown input unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Input unit must be a standard unit! Ignored request.')}function c(e,t){console.error("%cSimplify JavaScript (SJS) - Converter","font-weight: bold;","\n",'Unknown output unit "'+JSON.stringify(t)+'" in the "'+e+'" converter! Output unit must be a standard unit! Ignored request.')}function o(e,t,a="K"){let o,s;if("number"==typeof e){switch(t){case"K":case"Kelvin":o=e;break;case"C":case"°C":case"℃":case"Celsius":o=e+273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":o=(e+459.67)*(5/9);break;case"R":case"°R":case"Rankine":o=e*(5/9);break;case"De":case"°De":case"Delisle":o=373.15-e*(2/3);break;case"N":case"°N":case"Newton":o=e*(100/33)+273.15;break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":o=e*(5/4)+273.15;break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":o=40/21*(e-7.5)+273.15;break;default:n("Temperature",t),s=void 0}switch(a){case"K":case"Kelvin":s=o;break;case"C":case"°C":case"℃":case"Celsius":s=o-273.15;break;case"F":case"°F":case"℉":case"Fahrenheit":s=1.8*o-459.67;break;case"R":case"°R":case"Rankine":s=1.8*o;break;case"De":case"°De":case"Delisle":s=1.5*(373.15-o);break;case"N":case"°N":case"Newton":s=.33*(o-273.15);break;case"Re":case"°Re":case"Ré":case"°Ré":case"Réaumur":case"Reaumur":s=.8*(o-273.15);break;case"Ro":case"°Ro":case"Rø":case"°Rø":case"Rømer":case"Romer":s=.525*(o-273.15)+7.5;break;default:c("Temperature",a),s=void 0}}else r("Temperature",e,"number"),s=void 0;return null==s&&(s=void 0),s}function s(e,t,a="m"){let o,s;if("number"==typeof e){switch(t){case"m":case"Metre":case"Meter":o=e;break;case"Ym":case"Yottametre":case"Yottameter":o=e*Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":o=e*Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":o=e*Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":o=e*Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":o=e*Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":o=e*Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":o=e*Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":o=e*Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":o=e*Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":o=e*Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":o=e*Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":o=e*Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":o=e*Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":o=e*Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":o=e*Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":o=e*Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":o=e*Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":o=e*Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":o=e*Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":o=e*Math.pow(10,-24);break;case"in":case"Inch":o=.0254*e;break;case"yd":case"Yard":o=.9144*e;break;case"A":case"Å":case"Ångström":case"Angstrom":o=e*Math.pow(10,-10);break;case"ft":case"Foot":o=.3048*e;break;case"mi":case"Mile":o=1609.344*e;break;case"nmi":case"NM":case"M":case"Nautical":o=1852*e;break;case"ly":case"LightYear":o=e*(9.4607*Math.pow(10,15));break;default:n("Length",t),s=void 0}switch(a){case"m":case"Metre":case"Meter":s=o;break;case"Ym":case"Yottametre":case"Yottameter":s=o/Math.pow(10,24);break;case"Zm":case"Zettametre":case"Zettameter":s=o/Math.pow(10,21);break;case"Em":case"Exametre":case"Exameter":s=o/Math.pow(10,18);break;case"Pm":case"Petametre":case"Petameter":s=o/Math.pow(10,15);break;case"Tm":case"Terametre":case"Terameter":s=o/Math.pow(10,12);break;case"Gm":case"Gigametre":case"Gigameter":s=o/Math.pow(10,9);break;case"Mm":case"Megametre":case"Megameter":s=o/Math.pow(10,6);break;case"km":case"㎞":case"㏎":case"Kilometre":case"Kilometer":s=o/Math.pow(10,3);break;case"hm":case"Hectometre":case"Hectometer":s=o/Math.pow(10,2);break;case"dam":case"Decametre":case"Decameter":s=o/Math.pow(10,1);break;case"dm":case"Decimetre":case"Decimeter":s=o/Math.pow(10,-1);break;case"cm":case"㎝":case"Centimetre":case"Centimeter":s=o/Math.pow(10,-2);break;case"mm":case"㎜":case"Millimetre":case"Millimeter":s=o/Math.pow(10,-3);break;case"um":case"µm":case"Micrometre":case"Micrometer":s=o/Math.pow(10,-6);break;case"nm":case"Nanometre":case"Nanometer":s=o/Math.pow(10,-9);break;case"pm":case"Picometre":case"Picometer":s=o/Math.pow(10,-12);break;case"fm":case"Femtometre":case"Femtometer":s=o/Math.pow(10,-15);break;case"am":case"Attometre":case"Attometer":s=o/Math.pow(10,-18);break;case"zm":case"Zeptometre":case"Zeptometer":s=o/Math.pow(10,-21);break;case"ym":case"Yoctometre":case"Yoctometer":s=o/Math.pow(10,-24);break;case"in":case"Inch":s=o/.0254;break;case"yd":case"Yard":s=o/.9144;break;case"A":case"Å":case"Ångström":case"Angstrom":s=o/Math.pow(10,-10);break;case"ft":case"Foot":s=o/.3048;break;case"mi":case"Mile":s=o/1609.344;break;case"nmi":case"NM":case"M":case"Nautical":s=o/1852;break;case"ly":case"LightYear":s=o/(9.4607*Math.pow(10,15));break;default:c("Length",a),s=void 0}}else r("Length",e,"number"),s=void 0;return null==s&&(s=void 0),s}function i(e,t,a="R"){let o,s;if("number"==typeof e){switch(t){case"rad":case"R":case"RAD":case"Radian":case"radian":o=e;break;case"°":case"D":case"Degree":case"degree":o=e*(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":o=e*(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":o=e*(2*Math.PI);break;default:n("Angle",t),s=void 0}switch(a){case"rad":case"R":case"RAD":case"Radian":case"radian":s=o;break;case"°":case"D":case"Degree":case"degree":s=o/(Math.PI/180);break;case"g":case"G":case"gon":case"ᵍ":case"grad":case"grade":case"Gradian":case"gradian":s=o/(Math.PI/200);break;case"tr":case"T":case"pla":case"Turn":case"turn":s=o/(2*Math.PI);break;default:c("Angle",a),s=void 0}}else r("Angle",e,"number"),s=void 0;return null==s&&(s=void 0),s}function u(e,t,a="kg"){let o,s;if("number"==typeof e){switch(t){case"kg":case"㎏":case"Kilogram":o=e;break;case"g":case"Gram":o=e/1e3;break;case"t":case"Tonne":case"Mg":case"Megagram":o=1e3*e;break;case"斤":case"catty":case"Catty":o=.60478982*e;break;case"lb":case"Pound":o=e/2.20462262;break;case"兩":case"Tael":o=e/16*.60478982;break;case"錢":case"Mace":o=e/160*.60478982;break;case"oz":case"OZ":case"Ounce":o=28.349523125*e/1e3;break;case"eV":case"ElectronVolt":o=e*(1.783*Math.pow(10,-36));break;default:n("Weight",t),s=void 0}switch(a){case"kg":case"㎏":case"Kilogram":s=o;break;case"g":case"Gram":s=1e3*o;break;case"t":case"Tonne":case"Mg":case"Megagram":s=o/1e3;break;case"斤":case"catty":case"Catty":s=o/.60478982;break;case"lb":case"Pound":s=2.20462262*o;break;case"兩":case"Tael":s=o/.60478982*16;break;case"錢":case"Mace":s=o/.60478982*160;break;case"oz":case"OZ":case"Ounce":s=o/28.349523125*1e3;break;case"eV":case"ElectronVolt":s=o/(1.783*Math.pow(10,-36));break;default:c("Weight",a),s=void 0}}else r("Weight",e,"number"),s=void 0;return null==s&&(s=void 0),s}a.r(t),a.d(t,"Temperature",function(){return o}),a.d(t,"Length",function(){return s}),a.d(t,"Angle",function(){return i}),a.d(t,"Weight",function(){return u})}])});