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
      element.on('touchend', onClickFunction);
    }
    else {
      element.on('click', onClickFunction);
    }
  }
}

module.exports = Utils;