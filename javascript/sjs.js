!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(){return function(e){var o={};function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(r,n,function(o){return e[o]}.bind(null,n));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";t.r(o),t.d(o,"SimplifyJavaScript",function(){return r}),t.d(o,"SJS",function(){return n});const r={Version:function(e=-1){let o="0.0.1".split(".");switch((1!=Number.isInteger(e)||e<-1||e>4)&&(e=-1),e){case-1:return"0.0.1";case 0:return o[0];case 1:return o[1];case 2:return o[2];case 3:return o[0]+"."+o[1];case 4:return o[1]+"."+o[2]}},Test:function(){return console.log("Hello world!")}};r.Browser.Information=t(1),r.Browser.Info=r.Browser.Information,r.Browser.Storage=t(2);const n=r},function(e,o,t){"use strict";t.r(o),t.d(o,"BrowserInformation",function(){return r});const r={};let n,i,a=navigator.userAgent,u=((navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage).toLowerCase(),["bot","generator","http://","https://",".com",".net",".io","preview","crawler","google page speed insight"]);for(let e=0;e<u.length;e++)-1!=a.toLowerCase().search(u[e])&&(n="Bot");"Bot"!=n&&-1!=a.search("TV")&&(n="Television"),i="Bot"==n?"Bot":-1!=a.indexOf("Firefox")?"Mozilla Firefox":-1!=a.indexOf("Opera")||-1!=a.indexOf("OPR")?"Opera":-1!=a.indexOf("MSIE")||-1!=a.indexOf("Trident")?"Microsoft Internet Explorer":-1!=a.indexOf("Edge")?"Microsoft Edge":-1!=a.indexOf("Chrome")?"Google Chrome":-1!=a.indexOf("Safari")?"Apple Safari":"Unknown",r.Agent=function(e=null){if(null==e)return a},r.Device=function(e=null){return null==e?n:-1!=n.search(e)}},function(e,o){var t={LocalStorage:!1,SessionStorage:!1,Cookie:!1};window.localStorage&&(t.LocalStorage=!0),window.sessionStorage&&(t.SessionStorage=!0),window.navigator.cookieEnabled&&(t.Cookie=!0),console.table({LocalStorage:{"Support Stat":t.LocalStorage},SessionStorage:{"Support Stat":t.SessionStorage},Cookie:{"Support Stat":t.Cookie}})}])});