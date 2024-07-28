<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Logistic][logistic-distribution] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_mgf_function" align="center" raw="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = e^{\mu t}\operatorname{B}(1-st, 1+st)" alt="Moment-generating function (MGF) for a logistic distribution."> -->

```math
M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = e^{\mu t}\mathop{\mathrm{B}}(1-st, 1+st)
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := \mathbb{E}\!\left[e^{tX}\right] = e^{\mu t}\operatorname{B}(1-st, 1+st)" data-equation="eq:logistic_mgf_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/logistic/mgf/docs/img/equation_logistic_mgf_function.svg" alt="Moment-generating function (MGF) for a logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `st ∈ (-1,1)`, where `mu` is the location parameter and `s` is the scale parameter. In above equation, `B` denotes the [Beta function][@stdlib/math/base/special/beta]. For `st` outside the interval `(-1,1)`, the function is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mgf@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-logistic-mgf/tags). For example,

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mgf@v0.2.2-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mgf@esm/index.mjs';
```

#### mgf( t, mu, s )

Evaluates the logarithm of the [moment-generating function][mgf] (MGF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = mgf( 0.9, 0.0, 1.0 );
// returns ~9.15

y = mgf( 0.1, 4.0, 4.0 );
// returns ~1.971

y = mgf( -0.2, 4.0, 4.0 );
// returns ~1.921
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0, 1.0 );
// returns NaN

y = mgf( 0.0, NaN, 1.0 );
// returns NaN

y = mgf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0` or `abs( s * t ) > 1`, the function returns `NaN`.

```javascript
var y = mgf( 0.5, 0.0, -1.0 );
// returns NaN

y = mgf( 0.5, 0.0, 4.0 );
// returns NaN
```

#### mgf.factory( mu, s )

Returns a function for evaluating the [moment-generating function][mgf] (MGF) of a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mymgf = mgf.factory( 10.0, 0.5 );

var y = mymgf( 0.5 );
// returns ~164.846

y = mymgf( 2.0 );
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-logistic-mgf@esm/index.mjs';

var mu;
var s;
var t;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    t = randu();
    mu = (randu() * 10.0) - 5.0;
    s = randu() * 2.0;
    y = mgf( t, mu, s );
    console.log( 't: %d, µ: %d, s: %d, M_X(t;µ,s): %d', t.toFixed( 4 ), mu.toFixed( 4 ), s.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-logistic-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-logistic-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-logistic-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-logistic-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-logistic-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-logistic-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-logistic-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-logistic-mgf/main/LICENSE

[@stdlib/math/base/special/beta]: https://github.com/stdlib-js/math-base-special-beta/tree/esm

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
