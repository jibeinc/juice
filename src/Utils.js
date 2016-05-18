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
    element.attr('style', 'touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;');
    element.on('click', onClickFunction);
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
