'use strict';

// Tests
const testsContext = require.context('./src', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

// Components
const componentsContext = require.context('./src', true, /index\.js$/);
componentsContext.keys().forEach(componentsContext);
