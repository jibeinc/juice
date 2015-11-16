UI Components
==================

Framework agnostic UI components built with ES6 and WebPack
-----------------------------------------------------------

## Dependencies:

    - jQuery
    - uuid
    - debounce

## Components

    - basic text input
    - basic button
    - list view (grid of results from a fetch func...)
    - single select and multi select
    - use my current location icon
    - typeahead

## Build

    - ES6 to ES5 with support for IE9+ via [Babel](https://babeljs.io/)
    - [CSS Next](http://cssnext.io/) used to transpile all CSS into browser specific prefixes, etc
    - all CSS auto [loaded as style tags](https://github.com/webpack/style-loader) into DOM
    - images in-lined as data-uris with [img-loader](https://github.com/thetalecrafter/img-loader)
    - support for [doT](https://olado.github.io/doT/index.html) templates
    - support for ES6 [templates string](https://github.com/bradbenvenuti/template-string-loader) partials
    - support for [LESS](https://github.com/webpack/less-loader)
