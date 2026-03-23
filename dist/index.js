"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=n(function(k,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-sinc/dist'),p=require('@stdlib/math-base-special-exp/dist'),x=require('@stdlib/math-base-special-abs/dist');function y(e,r,i){var a;return a=i*e,u(a)||u(r)||i<0||x(a)>1?NaN:p(r*e)/N(a)}s.exports=y
});var q=n(function(m,f){
var g=require('@stdlib/utils-constant-function/dist'),b=require('@stdlib/stats-base-dists-degenerate-mgf/dist').factory,c=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-sinc/dist'),l=require('@stdlib/math-base-special-exp/dist'),F=require('@stdlib/math-base-special-abs/dist');function O(e,r){if(c(e)||c(r)||r<0)return g(NaN);if(r===0)return b(e);return i;function i(a){var t=r*a;return F(t)>1?NaN:l(e*a)/d(t)}}f.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=v(),h=q();R(o,"factory",h);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
