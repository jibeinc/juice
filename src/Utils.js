const $ = require('jquery');

class Utils {
  constructor() {

  }

  /**
   * Binds to either click or touch, based on what is available
   * @param element The jquery wrapped element to bind to
   * @param onClickFunction The function to call on click or touch
   */
  static bindClick(element, onClickFunction) {

    if ('ontouchstart' in document.documentElement) {
      element.on('touchstart', () => {
        $(this).on('touchend', (evt) => {
          onClickFunction(evt);
          $(this).off('touchend');
        });
        $(this).on('touchmove', () => {
          $(this).off('touchend');
        });
      });
    }
    else {
      element.on('click', onClickFunction);
    }
  }
}

module.exports = Utils;