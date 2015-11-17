'use strict';

const UIComponents = {
  $: require('jquery'),
  State: require('./State'),
  PubSubHub: require('./PubSubHub'),
  Button: require('./Button'),
  CurrentLocation: require('./CurrentLocation'),
  ExpandCollapseContainer: require('./ExpandCollapse/ExpandCollapseContainer'),
  ExpandCollapseToggle: require('./ExpandCollapse/ExpandCollapseToggle'),
  ListView: require('./ListView'),
  MultiSelect: require('./MultiSelect'),
  SingleSelect: require('./SingleSelect'),
  TextInput: require('./TextInput'),
  Typeahead: require('./Typeahead')
};

module.exports = UIComponents;
