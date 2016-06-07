// const $ = require('jquery');
// window.$ = $;
// window.jQuery = $;
// window.jquery = $;
// require('imports?jQuery=jquery!./vendor/jquery.simplePagination.js');

// Tests
const testsContext = require.context('./tests', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

// Components
const componentsContext = require.context('./src', true, /index\.js$/);
componentsContext.keys().forEach(componentsContext);
