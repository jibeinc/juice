'use strict';

const initFunc = require('./init');

const UIComponents = {
  // exposed dependences
  $: require('jquery'),
  Dot: require('./Dot'),
  i18n: require('./i18n'),

  // services
  BaseFragmentFactory: require('./BaseFragmentFactory'),
  PubSubHub: require('./PubSubHub'),
  State: require('./State'),
  URL: require('./URL'),

  // components
  Button: require('./Button'),
  CurrentLocation: require('./CurrentLocation'),
  ExpandCollapse: require('./ExpandCollapse/'),
  ListView: require('./ListView'),
  SingleSelect: require('./SingleSelect'),
  MultiSelect: require('./MultiSelect'),
  Pagination: require('./Pagination'),
  InfiniteScroll: require('./InfiniteScroll'),
  TextInput: require('./TextInput'),
  Toggle: require('./Toggle'),
  Typeahead: require('./Typeahead'),
  LocationTypeahead: require('./LocationTypeahead'),
  SentenceGenerator: require('./SentenceGenerator')
};

UIComponents.init = function init() {
  return initFunc.apply(UIComponents, arguments);
};

module.exports = UIComponents;
