'use strict';

//  @title: Sentence Generator
//  @author: Naveed Nadjmabadi
//  @description: recieve a template config, and a data object. Render the parsed String.
//
// css
require('./styles.css');

// scripts
const dotty = require('dotty');
const BaseComponent = require('../BaseComponent');


class SentenceGenerator extends BaseComponent {

  /*  @constructor
   **  @param {string} el   - The dom element to attach to
   **  @param {Object} opts - The options passed in to configure this component
   **  @param {Array} opts.structure - The sentence 'fragments' to be assembled. Each index
   **    is an Object that takes at least 3 properties:
   **
   **    {
   **      fragment: {String}  - part of the sentence with a ${} where the value should be interpolated
   **      required: {Boolean} - whether the fragment is necessary for the string to exist
   **      default: {String} [optional]  - a fallback string in case the value inside ${} is falsey
   **      order: {Number} [optional] - the order of the sentence fragment in the entire string
   **    }
   **
   **  @param {Boolean} [optional] opts.ordinality - whether the fragment objects have explicit arrangement
   **  @param {String} [optional] opts.delimiter - a character to put inbetween each sentence fragment
   **  @param {Regex} [optional] opts.regex - the pattern to determine where string interpolation takes place
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


  get() {
    return this.value;
  }

  /*
   ** @method
   ** @param {Object} data - An object containing the values to interpolate
   **
   */
  set(data) {
    this.value = (typeof data !== 'undefined') ? data : {};
    this.render();
  }

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
}

module.exports = SentenceGenerator;
