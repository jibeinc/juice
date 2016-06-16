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
   * @param {string} content - The markup of the content to put inside the modal
   * @param {object} opts - The options for the component
   * @param {string} [opts.closeButton] - The markup to render for the close button
   * @param {boolean} [opts.fullscreenModal] - A boolean indicating if the modal should be 100vw and 100vh or fill its container
   * @param {boolean} [opts.hideOnOverlayClick] - A boolean indicating if clicking the overlay should close the modal
   * @param {boolean} [opts.showOverlay] - A boolean to show the grey overlay or not
   */
  constructor(el, content, opts = {}) {
    if (typeof content === 'string') {
      super(el, {preserveChildElements: true});
      Object.assign(this, {
        content,
        closeButton: opts.closeButton || 'X',
        fullscreenModal: opts.fullscreenModal === false ? false : true,
        hideOnOverlayClick: opts.hideOnOverlayClick || false,
        showOverlay: opts.showOverlay || false
      });
    }
    else {
      throw new Error('You must pass in content, you cannot have an empty modal.');
    }
  }

  /**
   * Hide the modal
   */
  hide() {
    this.toggle(false);
  }

  /**
   * Render the html for the modal
   * @returns {string} The html for the modal
   */
  render() {
    this.$el.prepend(modalTmpl(this));

    // Close on overlay click
    if (this.hideOnOverlayClick) {
      this.$el.find('.ui-modal-overlay').on('click', () => {
        this.hide();
      });
    }

    // Close on "X" click
    this.$el.find('.ui-modal-content .close-button').on('click', () => {
      this.hide();
    });

    if (this.fullscreenModal) {
      this.$el.find('.ui-modal-overlay').addClass('ui-modal-fullscreen');
    }

    return this.$el.html();
  }

  /**
   * Show the modal
   */
  show() {
    this.toggle(true);
  }

  /**
   * Show or hide the modal
   * @param {boolean} show If true, show, otherwise, hide
   */
  toggle(show) {
    let display = 'none';

    if (show) {
      display = 'block';
    }

    if (this.showOverlay) {
      this.$el.find('.ui-modal-overlay').css('display', display);
    }
    this.$el.find('.ui-modal-content').css('display', display);
  }
}

module.exports = Modal;
