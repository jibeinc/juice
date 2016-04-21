'use strict';

const $ = require('jquery');
const bowser = require('bowser');

/**
 * A class to hold utils methods
 */
class Utils {

  /**
   * Binds to either click or touch, based on what is available
   * @param {jQuery} element The jquery wrapped element to bind to
   * @param {function} onClickFunction The function to call on click or touch
   */
  static bindClick(element, onClickFunction) {
    // JJT-2261
    // detect windows8+chrome48 for touchstart bug
    const isBadChrome48 = bowser.chrome && bowser.version >= 48 &&
      !bowser.android &&
      !bowser.windowsphone &&
      !bowser.ios &&
      !bowser.blackberry;

    if ('ontouchstart' in document.documentElement && !isBadChrome48) {
      let dragging = false;
      $('body').on('touchstart', () => {
        dragging = false;
      });
      $('body').on('touchmove', () => {
        dragging = true;
      });

      element.on('touchend', (evt) => {
        if (dragging) {
          dragging = false;
        } else {
          onClickFunction(evt);
        }
      });
    } else {
      element.on('click', onClickFunction);
    }
  }
}

module.exports = Utils;
