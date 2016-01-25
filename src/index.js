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
  CustomTextInput: require('./TextInput/CustomTextInput'),
  ExpandCollapse: require('./ExpandCollapse/'),
  InfiniteScroll: require('./InfiniteScroll'),
  ListView: require('./ListView'),
  LocationTextInput: require('./LocationTextInput'),
  LocationTypeahead: require('./LocationTypeahead'),
  MultiSelect: require('./MultiSelect'),
  Pagination: require('./Pagination'),
  RadioButtons: require('./RadioButtons'),
  SentenceGenerator: require('./SentenceGenerator'),
  SingleSelect: require('./SingleSelect'),
  TextInput: require('./TextInput'),
  Toggle: require('./Toggle'),
  Typeahead: require('./Typeahead'),
  LocationTypeahead: require('./LocationTypeahead'),
  SentenceGenerator: require('./SentenceGenerator'),
  Spinner: require('./Spinner')
};

UIComponents.init = function init() {
  return initFunc.apply(UIComponents, arguments);
};

module.exports = UIComponents;
