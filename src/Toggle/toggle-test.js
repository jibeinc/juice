'use strict';

const $ = require('jquery');
const Toggle = require('./index.js');

describe('toggle', () => {
  let toggleTest;

  beforeEach(() => {
    $('body').append('<div class="toggle-test"></div>');
    toggleTest = new Toggle('.toggle-test', {
      toggledClass: 'toggled-class',
      untoggledClass: 'untoggled-class'
    });
    toggleTest.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially untoggled and toggled after click', () => {
    expect(toggleTest.get()).toBe(null);
    toggleTest.$el.click();
    expect(toggleTest.get()).toBe(true);
  });
});
