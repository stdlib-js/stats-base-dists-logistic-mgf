"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=u(function(k,v){
var s=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-sinc/dist'),p=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-abs/dist');function y(e,r,i){var a;return a=i*e,s(a)||s(r)||i<0||x(a)>1?NaN:p(r*e)/N(a)}v.exports=y
});var q=u(function(m,f){
var g=require('@stdlib/utils-constant-function/dist'),b=require('@stdlib/stats-base-dists-degenerate-mgf/dist').factory,t=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-sinc/dist'),l=require('@stdlib/math-base-special-exp/dist'),F=require('@stdlib/math-base-special-abs/dist');function O(e,r){if(t(e)||t(r)||r<0)return g(NaN);if(r===0)return b(e);return i;function i(a){var n=r*a;return t(a)||F(n)>1?NaN:l(e*a)/d(n)}}f.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=c(),h=q();R(o,"factory",h);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
