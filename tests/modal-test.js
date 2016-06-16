const Modal = require('../src/Modal/index.js');

describe('modal functionality', () => {
  let modal;

  afterEach(() => {
    $('body').empty();
  });

  it('close button', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        hideOnOverlayClick: true,
        showOverlay: true
      });

    modal.render();

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('block');

    modal.$el.find('.ui-modal-content .close-button').trigger('click');

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('none');
  });

  it('throw error when no content', () => {
    expect(() => {
      return new Modal('body');
    })
      .toThrow(new Error('You must pass in content, you cannot have an empty modal.'));
  });

  it('hideOnOverlayClick: true', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        hideOnOverlayClick: true,
        showOverlay: true
      });

    modal.render();

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('block');

    modal.$el.find('.ui-modal-overlay').trigger('click');

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('none');
  });

  it('hideOnOverlayClick: false', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        hideOnOverlayClick: false,
        showOverlay: true
      });

    modal.render();

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('block');

    modal.$el.find('.ui-modal-overlay').trigger('click');

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('block');
  });

  it('showOverlay: true', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        hideOnOverlayClick: true,
        showOverlay: true
      });

    modal.render();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('none');

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('block');
  });

  it('showOverlay: false', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        hideOnOverlayClick: false,
        showOverlay: false
      });

    modal.render();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('none');

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');
    expect(modal.$el.find('.ui-modal-content').css('display')).toBe('block');
  });

  it('fullscreenModal: true', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        fullscreenModal: true,
        hideOnOverlayClick: true,
        showOverlay: true
      });

    modal.render();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay')).toHaveClass('ui-modal-fullscreen');
    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-overlay').css('position')).toBe('fixed');
    expect(modal.$el.find('.ui-modal-overlay').css('height')).toBe(window.innerHeight + 'px');
    expect(modal.$el.find('.ui-modal-overlay').css('width')).toBe(window.innerWidth + 'px');
  });

  it('fullscreenModal: false', () => {
    modal = new Modal('body', 'This is a test modal',
      {
        fullscreenModal: false,
        hideOnOverlayClick: true,
        showOverlay: true
      });

    modal.render();

    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('none');

    modal.show();

    expect(modal.$el.find('.ui-modal-overlay')).not.toHaveClass('ui-modal-fullscreen');
    expect(modal.$el.find('.ui-modal-overlay').css('display')).toBe('block');
    expect(modal.$el.find('.ui-modal-overlay').css('position')).toBe('absolute');

    // Hack to get width and height, make sure this is last
    const overlay = modal.$el.find('.ui-modal-overlay').clone()
      .appendTo('body')
      .wrap('<div style="display: none"></div>');
    expect(overlay.css('height')).toBe('100%');
    expect(overlay.css('width')).toBe('100%');
  });
});
