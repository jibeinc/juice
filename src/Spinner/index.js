'use strict';

require('./styles.css');
const BaseSpinner = require('spin.js');
const BaseComponent = require('../BaseComponent');

/**
 * Example:
 var opts = {
      lines: 12,             // The number of lines to draw
      length: 7,             // The length of each line
      width: 5,              // The line thickness
      radius: 10,            // The radius of the inner circle
      scale: 1.0,            // Scales overall size of the spinner
      corners: 1,            // Roundness (0..1)
      color: '#000',         // #rgb or #rrggbb
      opacity: 1/4,          // Opacity of the lines
      rotate: 0,             // Rotation offset
      direction: 1,          // 1: clockwise, -1: counterclockwise
      speed: 1,              // Rounds per second
      trail: 100,            // Afterglow percentage
      fps: 20,               // Frames per second when using setTimeout()
      zIndex: 2e9,           // Use a high z-index by default
      className: 'spinner',  // CSS class to assign to the element
      top: '50%',            // center vertically
      left: '50%',           // center horizontally
      shadow: false,         // Whether to render a shadow
      hwaccel: false,        // Whether to use hardware acceleration (might be buggy)
      position: 'absolute'   // Element positioning
    }

 var target = document.getElementById('foo')
 var spinner = new Spinner(opts).spin(target)
 */

/**
 * Class to render a loading spinner
 */
class Spinner extends BaseComponent {
  /**
   * Create a new spinner
   * @param {string} el - The selector for the element to put the spinner in
   * @param {object} opts - The options for the component
   */
  constructor(el, opts = {}) {
    $('.juicy-spinner').remove();
    $('.juicy-spinner-container').remove();

    // determine if global
    if (!el) {
      $('body').prepend('<div class=\'juicy-spinner-container\' style=\'display:none\'></div>');
      el = $('body');
    }

    // needed so elements aren't destroyed
    opts.preserveChildElements = true;
    opts.className = 'juicy-spinner';
    opts.position = 'fixed';

    super(el, opts);

    Object.assign(this, {
      opts,
      _toggled: false
    });

    this.spinner = new BaseSpinner(opts);
  }

  /**
   * Add the overlay and start the spinner
   * @returns {Promise} The spinner spin Promise
   */
  start() {
    this.toggleOverlay(true);
    this.publish();

    // retrieve native dom element
    const target = this.$el.get(0);
    return this.spinner.spin(target);
  }

  /**
   * Remove the overlay and stop the spinner
   * @returns {Promise} The spinner stop Promise
   */
  stop() {
    this.toggleOverlay(false);
    return this.spinner.stop();
  }

  /**
   * Starts the spinner on render
   * @returns {Promise} The spinner start promise
   */
  render() {
    return this.start();
  }

  /**
   * Get the spinner
   * @returns {object|null} The spinner or null
   */
  get() {
    return this.spinner || null;
  }

  /**
   * Shows/hides the greyed out overlay
   * @param {boolean} toggle Whether to display the overlay or not
   */
  toggleOverlay(toggle) {

    if (toggle) {
      $('body').addClass('noScroll');
      $('.juicy-spinner-container').css('display', 'block');
    }
    else {
      $('.juicy-spinner-container').css('display', 'none');
      $('body').removeClass('noScroll');
    }
  }

  /**
   * Set the options and create a new spinner
   * @param {object} opts - The options for the spinner
   */
  set(opts) {
    const newOpts = $.extend({}, this.opts, opts);

    // destroy reference to spinner & recreate w/ newOpts
    this.spinner = null;
    this.spinner = new BaseSpinner(newOpts);
  }
}

module.exports = Spinner;