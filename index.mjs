// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinc@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mgf@v0.1.0-esm/index.mjs";function d(s,r,m){var d;return t(d=m*s)||t(r)||m<0||i(d)>1?NaN:n(r*s)/e(d)}function a(s,d){return t(s)||t(d)||d<0?r(NaN):0===d?m(s):function(t){var r=d*t;if(i(r)>1)return NaN;return n(s*t)/e(r)}}s(d,"factory",a);export{d as default,a as factory};
//# sourceMappingURL=index.mjs.map
