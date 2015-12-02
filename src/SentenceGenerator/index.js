'use strict';

// # Render a string 
//
//   - recieve a template config, and a data object. Render the parsed String.
//
// css
require('./styles.css');

// scripts
const $             = require('jquery');
const dotty         = require('dotty');
const BaseComponent = require('../BaseComponent');


class SentenceGenerator extends BaseComponent {
  
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      structure: opts.structure || [],
      ordinality: opts.ordinality || false,
      delimiter: opts.delimiter || null,
      regex: opts.regex || /\$\{(?:\s*)([\S]+?)(?:\s*)\}/g
    });

    // sort the array by the ordinality of sentence fragments
    if (this.ordinality) {
      this.structure = opts.structure.sort(function compare(a, b) {
        return a - b;
      });
    }
  }

  get() {
    return (this.value !== undefined) ? this.value : '';
  }

  set(data) {
    this.value = data;
    this.render();
  }

  render() {
    let templateString = '';
    let regex          = this.regex;

    for (let i = 0; i < this.structure.length; i++) {
      
      // get the properties of each object
      let segment  = this.structure[i];
      let fragment = segment.fragment;
      let fallback = segment.default;
      let required = segment.required;

      // search and replace with the data values
      var matches;
      while ((matches = regex.exec(fragment)) !== null ) {
        let matchStr  = matches[0];
        let match     = matches[1];

        if (dotty.exists(this, match)) {
          fragment = fragment.replace(matchStr, dotty.get(this,match));
        }

        else if (fallback) {
          fragment = fallback;
        }

        else if (!required) {
          fragment = null;
        }

        // the data object passed in is missing critical data. Fail softly. Weep.
        else {
          this.$el.html('<span></span>');
          return;
        }
      }


      // skip this fragment bcuz theres no data :-(
      if (fragment === null) {
        console.log('fragment skipped');
        continue;
      }

      templateString += fragment;

      // optional inclusion of the delimiter
      if (this.delimiter && (i < this.structure.length - 1)) {
       templateString += this.delimiter; 
      }
    }

    console.log(templateString);
    this.$el.html('<span>' + templateString + '</span');
  }
};

module.exports = SentenceGenerator;
