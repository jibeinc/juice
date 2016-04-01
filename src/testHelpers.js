const $ = require('jquery');

class TestHelpers {
  static simulateKeyPress(keyCode, $element) {
    const e = $.Event('keydown');
    e.which = keyCode;
    $element.trigger(e);
  }
}

module.exports = TestHelpers;