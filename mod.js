// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,i=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,p,f;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(l.call(e,r)||i.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),p="get"in t,f="set"in t,_&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,r,t.get),f&&u&&u.call(e,r,t.set),e};var c=r;function _(e){return e!=e}var p=Number.NEGATIVE_INFINITY;function f(e){return 0===e&&1/e===p}function b(e,r,t){var n,a;return e<=0?NaN:1===e||0===t?r[0]:(t<0?(n=r[(1-e)*t],a=r[0]):(n=r[0],a=r[(e-1)*t]),_(n)||_(a)?NaN:n===a?f(n)||f(a)?-0:n:n<a?n:a)}function y(e,r,t,n){var a,o;return e<=0?NaN:1===e||0===t?r[0]:(a=r[n],o=r[n+(e-1)*t],_(a)||_(o)?NaN:a===o?f(a)||f(o)?-0:a:a<o?a:o)}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:y});export{b as default,y as ndarray};
//# sourceMappingURL=mod.js.map
