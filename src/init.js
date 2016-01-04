'use strict';

const i18n = require('./i18n');

module.exports = function init(opts, cb) {
  i18n.createInstance(opts.locale, opts.TRANSLATIONS, cb);
};
