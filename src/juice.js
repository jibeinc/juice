require('imports?jQuery=cash-dom!../vendor/jquery.simplePagination.js');

require('babel-polyfill');

// exposed dependences
const Dot = require('./Dot');

// services
const BaseFragmentFactory = require('./BaseFragmentFactory');
const PubSubHub = require('./PubSubHub');
const url = require('url');

// components
const Button = require('./Button');
const CurrentLocation = require('./CurrentLocation');
const ExpandCollapse = require('./ExpandCollapse/');
const InfiniteScroll = require('./InfiniteScroll');
const ListView = require('./ListView');
const LocationTextInput = require('./LocationTextInput');
const LocationTypeahead = require('./LocationTypeahead');
const MultiSelect = require('./MultiSelect');
const Pagination = require('./Pagination');
const RadioButtons = require('./RadioButtons');
const SingleSelect = require('./SingleSelect');
const TextInput = require('./TextInput');
const Toggle = require('./Toggle');
const Typeahead = require('./Typeahead');
const Spinner = require('./Spinner');

const UIComponents = {
  // exposed dependences
  Dot,

  // services
  BaseFragmentFactory,
  PubSubHub,
  url,

  // components
  Button,
  CurrentLocation,
  ExpandCollapse,
  InfiniteScroll,
  ListView,
  LocationTextInput,
  LocationTypeahead,
  MultiSelect,
  Pagination,
  RadioButtons,
  SingleSelect,
  TextInput,
  Toggle,
  Typeahead,
  Spinner
};

module.exports = UIComponents;
