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

    element.on('click', onClickFunction);

    if ('ontouchstart' in document.documentElement) {
      element.on('touchstart', (e) => {
        e.preventDefault();
        $(this).on('touchend', (e) => {
          e.preventDefault();
          $(this).trigger('click');
          $(this).off('touchend');
        });
        $(this).on('touchmove', () => {
          $(this).off('touchend');
        });
      });
    }
  }
}

module.exports = Utils;