/* eslint-disable lines-around-comment */

const Spinner = require('../src/Spinner/index.js');

describe('Spinner on Window', () => {
  let spinner;

  beforeEach(() => {
    $('body').append('<div style="background-color: cadetblue; height: 400px;"></div>');
    $('body').append('<button class="ui-button" style="position: relative; z-index: 10">I AM A BUTTON!</button>');
    $('body').append('<div style="background-color: cadetblue; height: 1000px;"></div>');

    spinner = new Spinner();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('should test if spinner + overlay shows up', (done) => {
    spinner.start();

    setTimeout(() => {
      expect($(document).find('.juicy-spinner-container')).toExist();
      expect($('body')).toHaveClass('noScroll');
      done();
    }, 100);
  });

  // TODO: verify that the overlays blocks any action
  it('should verify the overlay prevents user action', (done) => {
    spinner.start();

    setTimeout(() => {
      debugger;
      const overlayZindex = $('.juicy-spinner-container').css('zIndex');
      const buttonZindex = $('.ui-button').css('zIndex');

      expect($('body')).toHaveClass('noScroll');
      expect(overlayZindex).toBe('9999');
      expect(overlayZindex).toBeGreaterThan(buttonZindex);
      done();
    }, 50);
  });

  it('should stop the spinner', (done) => {
    spinner.start();

    setTimeout(() => {
      spinner.stop();
    }, 100);

    setTimeout(() => {
      expect($(document).find('.juicy-spinner-container')).toExist();
      expect($('body')).not.toHaveClass('noScroll');
      done();
    }, 300);
  });
});
