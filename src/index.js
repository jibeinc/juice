'use strict';

const UIComponents = {
  $: require('jquery'),
  Dot: require('./Dot'),
  State: require('./State'),
  PubSubHub: require('./PubSubHub'),
  URL: require('./URL'),
  Button: require('./Button'),
  CurrentLocation: require('./CurrentLocation'),
  ExpandCollapseContainer: require('./ExpandCollapse/ExpandCollapseContainer'),
  ExpandCollapseToggle: require('./ExpandCollapse/ExpandCollapseToggle'),
  ListView: require('./ListView'),
  MultiSelect: require('./MultiSelect'),
  Pagination: require('./Pagination'),
  SingleSelect: require('./SingleSelect'),
  TextInput: require('./TextInput'),
  Typeahead: require('./Typeahead')
};

module.exports = UIComponents;
