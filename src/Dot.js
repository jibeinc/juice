'use strict';

const $ = require('jquery');
const doT = require('dot');
const i18n = require('./i18n');

// Note: this just mimics apply current setup
const dotConfigOverrides = {
  evaluate: /\[\[([\s\S]+?)\]\]/g,
  interpolate: /\[\[=([\s\S]+?)\]\]/g,
  encode: /\[\[!([\s\S]+?)\]\]/g,
  use: /\[\[#([\s\S]+?)\]\]/g,
  define: /\[\[##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\]\]/g,
  conditional: /\[\[\?(\?)?\s*([\s\S]*?)\s*\]\]/g,
  iterate: /\[\[~\s*(?:\]\]|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\]\])/g,
  varname: 'model',
  strip: false,
  append: true,
  selfcontained: false
};

const globalTemplateMap = {
  translate: (token, context) => {
    return i18n.getInstance().t(token, context);
  }
};

class DotService {

  constructor(doT) {
    this.doT = doT;
  }

  /**
   * gets a doT template, interpolates the model into it,
   * converts it into a jQuery DOM, then appends it to the DOM
   * based on the given css selector
   * @param {String} template
   * @param {String} cssSelector
   * @param {Object} viewModel
   */
  renderIntoDOM(template, cssSelector, viewModel) {
    if (!template) {
      throw new Error('Cannot render null template!');
    }

    if (!cssSelector) {
      throw new Error('You must specify a jquery-friendly css selector to render template into.');
    }

    const renderIntoDOMWith = this.doT.template(template, dotConfigOverrides, globalTemplateMap);
    return $(cssSelector).html(renderIntoDOMWith(viewModel));
  }

  compile(template, data) {
    return this.doT.template(template, dotConfigOverrides, globalTemplateMap)(data);
  }
}

module.exports = new DotService(window.doT);
