'use strict';

const $ = require('jquery');

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
    const e = $.Event('keydown'); // eslint-disable-line new-cap
    e.which = keyCode;
    $element.trigger(e);
  }
}

module.exports = TestHelpers;
