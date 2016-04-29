/* globals Event */
'use strict';

/**
 * A class for providing static test helper methods
 */
class TestHelpers {

  /**
   * Simulate a keydown event
   * @param {integer} keyCode The key code for the key to simulate pressing
   * @param {jQuery} $element The jQuery wrapped element the keydown event is triggered on
   */
  static simulateKeyPress(keyCode, $element) {
    const e = new Event('keydown');
    e.which = keyCode;
    e.altKey = false;
    e.ctrlKey = true;
    e.shiftKey = false;
    e.metaKey = false;
    $element[0].dispatchEvent(e);
  }
}

module.exports = TestHelpers;
