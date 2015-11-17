'use strict';

const UIComponents = {
  $:               require('jquery'),
  State:           require('./State'),
  PubSubHub:       require('./PubSubHub'),
  CurrentLocation: require('./CurrentLocation'),
  TextInput:       require('./TextInput'),
  Button:          require('./Button'),
  SingleSelect:    require('./SingleSelect'),
  MultiSelect:     require('./MultiSelect'),
  ListView:        require('./ListView'),
  Typeahead:       require('./Typeahead')
};

module.exports = UIComponents;
