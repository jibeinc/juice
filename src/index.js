'use strict';

const UIComponents = {
  $:               require('jquery'),
  CurrentLocation: require('./CurrentLocation/index.js'),
  TextInput:       require('./TextInput/index.js'),
  Button:          require('./Button/index.js'),
  SingleSelect:    require('./SingleSelect/index.js'),
  MultiSelect:     require('./MultiSelect/index.js'),
  ListView:        require('./ListView/index.js'),
  Typeahead:       require('./Typeahead/index.js')
};

module.exports = UIComponents;
