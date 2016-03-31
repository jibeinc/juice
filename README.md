JUICE
==================

[![Code Climate](https://codeclimate.com/github/jibeinc/juice/badges/gpa.svg)](https://codeclimate.com/github/jibeinc/juice)
[![Build Status](https://travis-ci.org/jibeinc/juice.svg?branch=master)](https://travis-ci.org/jibeinc/juice)

**J**ibe **UI** **C**ommon **E**lements = JUICE

Framework agnostic UI components built with ES6 and WebPack
-----------------------------------------------------------

## Purpose:
JUICE is a framework-agnostic and isomorphic library of UI components that contain specific interaction behaviors necessary for Jibe's use cases. This library has set out to solve some of the problems experienced on the front-end:

    - maintaining consistent application state when individual UI components are updated
    - Allowing for server-side rendering of pages for SEO / Site Performance purposes
    - Creating a uniform look-and-feel for visitors when they interact with Jibe software

## Architectural Philosophy

> "We need to stop thinking like hackers, and instead, be surgeons with the code." - John Hewin Hatcher

This library was designed with the ideas that each component should be a self-contained set of code. Each component should be split into multiple layers, with each layer abstracting certain parts of the logic.

 - The root class of all classes is the baseComponent. This class handles the most low-level details, and will define a very basic getter / setter. All child classes must override the render() method. This functions like an Abstract Class in Java
 - Each UI component should inherit from the baseComponent class and supplement and/or override four functions: the constructor, get(), set(), and render() with the UI specific details. If a component is sufficiently more complicated, it should extend its "baseUIComponent" and layer on the additional behaviors in a child class.
 - As Each Component is self-contained, certain complicated UI components (like Typeahead, for example) can be created as a composite of a couple smaller, simpler components (ListView and TextInput).

Each component must be able to run on both the server-side, and the client side. If the component requires some set of data, one can expose a "fetch" function that allows the consumer to define the where-and-how the results happen. In addition, no UI component should throw an error. It should have smart defaults, and it should be able to gracefully handle malformed input.
Underlying the components is an internal Pub-Sub model of communication. Each component determines when to "publish" state changes. Any other components may "subscribe" to these changes, and fire off actionHandlers in response. This mode of inter-component communication was inspired partly by Facebook's Flux Paradigm.

## Runbook:

    - `npm install`, install all dependencies
    - `npm run build`, run the production build
    - `npm run build-dev`, run the dev build (prod build w/out minification and w/verbose logging)
    - `npm run examples`, run the examples:

## Dependencies:

    - jQuery
    - uuid
    - debounce
    - doT, not included in this lib! You must include this on your html page yourself)
      ie `<script src='https://cdnjs.cloudflare.com/ajax/libs/dot/1.0.3/doT.min.js'></script>`

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

## Roadmap

    - Add unit tests to each component
    - Remove the State.js, URL.js, and SentenceGenerator components
    - Architect the CSS to be more easily configurable
    - Pull out required parameters out of opts object
    - Rebrand the spinner
    - Split out functionality of baseFragment Factory into ListItemFactory + BaseComponent
