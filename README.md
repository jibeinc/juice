JUICE
==================

[![Code Climate](https://codeclimate.com/github/jibeinc/juice/badges/gpa.svg)](https://codeclimate.com/github/jibeinc/juice)
[![Test Coverage](https://codeclimate.com/github/jibeinc/juice/badges/coverage.svg)](https://codeclimate.com/github/jibeinc/juice/coverage)
[![Build Status](https://travis-ci.org/jibeinc/juice.svg?branch=master)](https://travis-ci.org/jibeinc/juice)
![](https://badge-size.herokuapp.com/jibeinc/juice/master/dist/ui.js.svg)

**J**ibe **UI** **C**ommon **E**lements = JUICE

Framework agnostic UI components built with ES6 and WebPack
-----------------------------------------------------------
## Purpose

JUICE is a framework-agnostic and isomorphic library of UI components that contain specific interaction behaviors necessary for Jibe's use cases. This library has set out to solve some of the problems experienced on the front-end:

    - maintaining consistent application state when individual UI components are updated
    - Allowing for server-side rendering of pages for SEO / Site Performance purposes
    - Creating a uniform look-and-feel for visitors when they interact with Jibe software

## Installation 

`npm install jibe-juice`

or

`bower install jibe-juice`

## Usage
### [Complete Usage Documentation at https://jibe-juice.readme.io/](https://jibe-juice.readme.io/)

### A brief example usage

HTML
```html
<div class="button-container"></div>
```

JS
```js
// Pull in the library
const UI = require('jibe-juice');

// Instantiate a component, pass the selector of the container to insert component into and the opts
const btn = new UI.Button('.button-container', {
  label: 'Search',
  submit: true
});

// Subscribe to fire this function whenever button calls publish
btn.subscribe(function () {
  console.log('clicked!');
});

// Render the DOM for the button
btn.render();
```

## Build

    - ES6 to ES5 with support for IE9+ via [Babel](https://babeljs.io/)
    - [CSS Next](http://cssnext.io/) used to transpile all CSS into browser specific prefixes, etc
    - all CSS auto [loaded as style tags](https://github.com/webpack/style-loader) into DOM
    - images in-lined as data-uris with [img-loader](https://github.com/thetalecrafter/img-loader)
    - support for [doT](https://olado.github.io/doT/index.html) templates
    - support for ES6 [templates string](https://github.com/bradbenvenuti/template-string-loader) partials
