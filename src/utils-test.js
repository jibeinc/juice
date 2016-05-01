'use strict';

const $ = require('jquery');
const rewire = require('rewire-webpack');
const Utils = rewire('./Utils.js');

describe('Utils test suite', () => {
  describe('bindClick static method', () => {
    let bowserMock;
    let clickSpy;
    let elem;

    beforeEach(() => {
      bowserMock = {
        chrome: true,
        version: 48,
        android: false,
        windowsphone: false,
        ios: false,
        blackberry: false
      };

      // mock the bowser module
      Utils.__set__('bowser', bowserMock);

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

    it('should fire the onClick handler for a browser that is not Windows+Chrome48', () => {
      bowserMock = {
        chrome: false,
        version: 48,
        android: false,
        windowsphone: false,
        ios: true,
        blackberry: false
      };

        // mock the bowser module
      Utils.__set__('bowser', bowserMock);

        // fire touchstart event on elem
      elem.trigger('touchstart');

        // fire touchend event on elem
      elem.trigger('touchend');

        // expect onClickHandler not to have been fired
      expect(clickSpy).not.toHaveBeenCalled();
    });

    it('should fire the onClick handler for Windows+Chrome48 if the touchmove event is not fired', () => {
      // fire touchstart event on elem
      elem.trigger('touchstart');

      // fire touchend event on elem
      elem.trigger('touchend');

      // expect onClickHandler to have been fired
      expect(clickSpy).toHaveBeenCalled();
    });

    it('should not fire the onClick handler for Windows+Chrome48 if the touchmove event is fired', () => {
      // fire touchstart event on elem
      elem.trigger('touchstart');

      // fire touchmove event on elem
      elem.trigger('touchmove');

      // fire touchend event on elem
      elem.trigger('touchend');

      // expect onClickHandler to have been fired
      expect(clickSpy).not.toHaveBeenCalled();
    });
  });
});
