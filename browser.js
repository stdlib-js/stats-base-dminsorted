// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var c=e;function f(e){return e!=e}var _=Number.NEGATIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e,t,r){var n,o;return e<=0?NaN:1===e||0===r?t[0]:(r<0?(n=t[(1-e)*r],o=t[0]):(n=t[0],o=t[(e-1)*r]),f(n)||f(o)?NaN:n===o?p(n)||p(o)?-0:n:n<o?n:o)}return c(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,a;return e<=0?NaN:1===e||0===r?t[0]:(o=t[n],a=t[n+(e-1)*r],f(o)||f(a)?NaN:o===a?p(o)||p(a)?-0:o:o<a?o:a)}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dminsorted=t();
//# sourceMappingURL=browser.js.map
