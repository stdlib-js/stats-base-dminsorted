"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(b,d){
var v=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-assert-is-negative-zero/dist');function y(e,r,a,s){var i,t;return e<=0?NaN:e===1||a===0?r[0]:(i=r[s],t=r[s+(e-1)*a],v(i)||v(t)?NaN:i===t?o(i)||o(t)?-0:i:i<t?i:t)}d.exports=y
});var q=n(function(h,f){
var x=require('@stdlib/strided-base-stride2offset/dist'),N=u();function g(e,r,a){return N(e,r,a,x(e,a))}f.exports=g
});var p=n(function(j,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),O=u();l(c,"ndarray",O);m.exports=c
});var R=p();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
