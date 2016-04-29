'use strict';

const doT = require('dot'); // eslint-disable-line no-unused-vars
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

/**
 * Class for working with dot and rendering DOM
 */
class DotService {

  /**
   * Creates a new Dot instance
   * @param {object} doTRef The doT object
   */
  constructor(doTRef) {
    this.doT = doTRef;
  }

  /**
   * Compile the passed dot template with the passed data
   * @param {string} template - The dot template we want to compile
   * @param {object} data - The model storing the data to insert into the dot template
   * @returns {string} The compiled html to display
   */
  compile(template, data) {
    return this.doT.template(template, dotConfigOverrides, globalTemplateMap)(data);
  }

  /**
   * Gets a doT template, interpolates the model into it, converts it into a jQuery DOM,
   * then appends it to the DOM based on the given css selector
   * @param {string} template - The template string
   * @param {string} cssSelector - The selector of the element to render the template into
   * @param {object} viewModel - The model with the data to fill in the template
   */
  renderIntoDOM(template, cssSelector, viewModel) {
    if (!template) {
      throw new Error('Cannot render null template!');
    }

    if (!cssSelector) {
      throw new Error('You must specify a jquery-friendly css selector to render template into.');
    }

    const renderIntoDOMWith = this.doT.template(template, dotConfigOverrides, globalTemplateMap);
    $(cssSelector).html(renderIntoDOMWith(viewModel));
  }
}

module.exports = new DotService(window.doT);
