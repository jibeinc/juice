'use strict';

// # Render a spinner

// css
require('./styles.css');

// scripts
const $ = require('jquery');
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

class Spinner extends BaseComponent {
  constructor(el, opts = {}) {

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

  start() {
    this.toggleOverlay(true);
    this.publish();

    // retrieve native dom element
    const target = this.$el.get(0);
    return this.spinner.spin(target);
  }

  stop() {
    this.toggleOverlay(false);
    return this.spinner.stop();
  }

  render() {
    return this.start();
  }

  get () {
    return this.spinner || null;
  }

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

  set (opts) {
    const newOpts = $.extend({}, this.opts, opts);

    // destroy reference to spinner & recreate w/ newOpts
    this.spinner = null;
    this.spinner = new BaseSpinner(newOpts);
  }
}

module.exports = Spinner;