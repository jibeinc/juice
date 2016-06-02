require('./styles.scss');
const modalTmpl = require('./modal.dot');
const BaseComponent = require('../BaseComponent');

/**
 * Class for creating a Modal component
 * @author Robbie Wagner
 */
class Modal extends BaseComponent {
  /**
   * Create a new Modal component
   * @param {string} el - The selector for the element to put the Modal component in
   * @param {object} opts - The options for the component
   */
  constructor(el, opts = {}) {
    super(el, {preserveChildElements: true});
    Object.assign(this, {
      fullScreen: opts.fullScreen || false,
      hideOnOverlayClick: opts.hideOnOverlayClick || false,
      showOverlay: opts.showOverlay || false
    })
  }

  /**
   * Hide the modal
   */
  hide() {
    if (this.showOverlay) {
      this.$el.find('.ui-modal-overlay').css('display', 'none');
    }
  }

  render() {
    this.$el.prepend(modalTmpl(this));
  }

  /**
   * Show the modal
   */
  show() {
    if (this.showOverlay) {
      this.$el.find('.ui-modal-overlay').css('display', 'block');
    }
  }
}

module.exports = Modal;
