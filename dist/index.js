"use strict";var a=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var o=a(function(h,f){
var v=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-negative-zero/dist');function g(n,e,t){var i,r;return n<=0?NaN:n===1||t===0?e[0]:(t<0?(i=e[(1-n)*t],r=e[0]):(i=e[0],r=e[(n-1)*t]),v(i)||v(r)?NaN:i===r?s(i)||s(r)?-0:i:i<r?i:r)}f.exports=g
});var N=a(function(j,d){
var q=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-assert-is-negative-zero/dist');function l(n,e,t,i){var r,u;return n<=0?NaN:n===1||t===0?e[0]:(r=e[i],u=e[i+(n-1)*t],q(r)||q(u)?NaN:r===u?c(r)||c(u)?-0:r:r<u?r:u)}d.exports=l
});var y=a(function(k,p){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=o(),O=N();Z(m,"ndarray",O);p.exports=m
});var R=y();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
