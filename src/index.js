'use strict';

const UIComponents = {

  // exposed dependences
  $:   require('jquery'),
  Dot: require('./Dot'),

  // services
  BaseFragmentFactory: require('./BaseFragmentFactory'),
  PubSubHub:           require('./PubSubHub'),
  State:               require('./State'),
  URL:                 require('./URL'),

  // components
  Button:                  require('./Button'),
  CurrentLocation:         require('./CurrentLocation'),
  ExpandCollapseContainer: require('./ExpandCollapse/ExpandCollapseContainer'),
  ListView:                require('./ListView'),
  SingleSelect:            require('./SingleSelect'),
  MultiSelect:             require('./MultiSelect'),
  Pagination:              require('./Pagination'),
  InfiniteScroll:          require('./InfiniteScroll'),
  TextInput:               require('./TextInput'),
  Typeahead:               require('./Typeahead'),
  LocationTypeahead:       require('./LocationTypeahead')
};

module.exports = UIComponents;
