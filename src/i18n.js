'use strict';

const i18next = require('i18next');

let instance = null;

module.exports = {
  createInstance: (locale='en-US', translations={}, cb) => {
    const opts = {
      resources: {},
      lng: locale,
      interpolation: {
        prefix: '{{',
        Suffix: '}}'
      }
    };

    // namespacing
    opts.ns = 'ja';
    opts.defaultNS = opts.ns;

    // actual token-key/value pairs
    opts.resources[locale] = {};
    opts.resources[locale][opts.ns] = translations;

    instance = i18next.createInstance(opts, () => {
      setTimeout(() => {
        cb(instance);
      });
    });
  },

  getInstance: () => {
    return instance;
  }
};
