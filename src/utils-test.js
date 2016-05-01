'use strict';

const $ = require('jquery');
const Utils = require('./Utils.js');

describe('Utils test suite', () => {
  describe('bindClick static method', () => {
    let bowserMock;
    let clickSpy;
    let elem;

    beforeEach(() => {
      // Fake being Window Chrome 48
      bowserMock = {
        chrome: true,
        version: 48,
        android: false,
        windowsphone: false,
        ios: false,
        blackberry: false
      };
      // create elem
      $('body').append('<div class="util-test"></div>');
      elem = $('body').find('.util-test');

      // create onClick spy
      clickSpy = jasmine.createSpy('onClickHandler');

      // create the method
      Utils.bindClick(elem, clickSpy);
    });

    afterEach(() => {
      $('body').empty();
    });

    it('should fire the onClick, via touch events if ios/mobile', () => {
      // mock the bowser module for ios
      bowserMock.chrome = false;
      bowserMock.ios = true;

      Utils.__Rewire__('bowser', bowserMock);

      // fire touchstart event on elem
      elem.trigger('touchstart');

      // fire touchend event on elem
      elem.trigger('touchend');

      // expect onClickHandler to have been fired
      expect(clickSpy).toHaveBeenCalled();
    });

    it('should NOT fire the onClick, when scrolled on ios/mobile', () => {
      // mock the bowser module for ios
      bowserMock.chrome = false;
      bowserMock.ios = true;

      Utils.__Rewire__('bowser', bowserMock);

      // fire touchstart event on elem
      elem.trigger('touchstart');

      // do a scroll
      elem.trigger('touchmove');

      // fire touchend event on elem
      elem.trigger('touchend');

      // expect onClickHandler not to have been fired
      expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should fire the onClick handler for Windows+Chrome48', () => {
      // mock the bowser module
      Utils.__Rewire__('bowser', bowserMock);

      // fire touchstart event on elem
      elem.trigger('touchstart');

      // fire touchend event on elem
      elem.trigger('touchend');

      // expect onClickHandler to have been fired
      expect(clickSpy).toHaveBeenCalled();
    });
  });
});
