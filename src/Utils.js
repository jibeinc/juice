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
    const isBadChrome48 = bowser.chrome && bowser.version >= 48 && !bowser.android && !bowser.windowsphone && !bowser.ios && !bowser.blackberry;

    // This is for mobile Safari and other touch enabled browsers
    // We have to check for Chrome 48 due to this https://bugs.chromium.org/p/chromium/issues/detail?id=467934
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
      // If we are on desktop, just do the click
      element.on('click', onClickFunction);
    }
  }

  /**
   * Get the height of the `document` element
   * @return {number} The height
   */
  static getDocumentHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }

  /**
   * Utility method to replace jQuery.isPlainObject
   * @param {*} value The value to check if it is an object
   * @returns {boolean} Whether the passed value is a plain object or not
   */
  static isPlainObject(value) {
    return value !== null &&
      Object.prototype.toString.call(value) === '[object Object]';
  }

  /**
   * An empty function for noop
   */
  static noop() {
    // Deliberately blank function
  }
}

module.exports = Utils;
