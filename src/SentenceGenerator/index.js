'use strict';

const dotty = require('dotty');
const BaseComponent = require('../BaseComponent');

/**
 * Receive a template config, and a data object. Render the parsed String.
 * @author Naveed Nadjmabadi
 */
class SentenceGenerator extends BaseComponent {
  /**
   *
   * @param {string} el   - The dom element to attach to
   * @param {object} opts - The options passed in to configure this component
   * @param {*[]} opts.structure - The sentence 'fragments' to be assembled. Each index
   *   is an Object that takes at least 3 properties:
   *    {
   *     {string} fragment  - part of the sentence with a ${} where the value should be interpolated
   *     {boolean} required - whether the fragment is necessary for the string to exist
   *     {string} [default]  - a fallback string in case the value inside ${} is falsey
   *     {number} [order] - the order of the sentence fragment in the entire string
   *   }
   * @param {boolean} [opts.ordinality] - whether the fragment objects have explicit arrangement
   * @param {string} [opts.delimiter] - a character to put in between each sentence fragment
   * @param {regex} [opts.regex] - the pattern to determine where string interpolation takes place
   */
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      structure: opts.structure || [],
      ordinality: opts.ordinality || false,
      delimiter: opts.delimiter || null,
      regex: opts.regex || /\$\{(?:\s*)([\S]+?)(?:\s*)\}/g,
      value: ''
    });

    // sort the array by the ordinality of sentence fragments
    if (this.ordinality) {
      this.structure = opts.structure.sort((a, b) => {
        return a.order - b.order;
      });
    }
  }

  /**
   * Gets the currently stored value
   * @returns {{}|*} The value
   */
  get() {
    return this.value;
  }

  /**
   * Render the template string into the html
   */
  render() {
    let templateString = '';
    const regex = this.regex;

    for (let i = 0; i < this.structure.length; i++) {

      // get the properties of each object
      const segment = this.structure[i];
      const fallback = segment.default;
      const required = segment.required;
      let fragment = segment.fragment;

      // search and replace with the data values
      let matches;
      while ((matches = regex.exec(fragment)) !== null) {
        const matchStr = matches[0];
        const match = matches[1];

        if (dotty.exists(this, match)) {
          fragment = fragment.replace(matchStr, dotty.get(this, match));
        }

        else if (fallback) {
          fragment = fallback;
        }

        else if (!required) {
          fragment = null;
        }

        // the data object passed in is missing critical data. Fail softly.
        else {
          this.$el.html('<span></span>');
          return;
        }
      }

      // skip this fragment because theres no data :-(
      if (fragment === null) {
        continue;
      }

      templateString += fragment;

      // optional inclusion of the delimiter
      if (this.delimiter && (i < this.structure.length - 1)) {
        templateString += this.delimiter;
      }
    }

    // strip trailing delimiter
    if (this.delimiter) {
      templateString = templateString.replace(new RegExp(this.delimiter + '$'), '');
    }

    this.$el.html('<span>' + templateString + '</span>');
  }

  /**
   * Set the value
   * @param {object} data - An object containing the values to interpolate
   */
  set(data) {
    this.value = (typeof data !== 'undefined') ? data : {};
    this.render();
  }
}

module.exports = SentenceGenerator;
