/**
 * A class to hold utils methods
 */
class Utils {

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
