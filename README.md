# PostCSS Bem Validator [![Build Status][ci-img]][ci]

[PostCSS] plugin to validate BEM names.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/verybigman/postcss-bem-validator.svg
[ci]:      https://travis-ci.org/verybigman/postcss-bem-validator

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-bem-validator') ])
```

See [PostCSS] docs for examples for your environment.
