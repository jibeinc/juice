const $ = require('jquery');
const expect = require('expect');
const toggle = require('./index.js');

describe('toggle', () => {
  it('test initially untoggled', () => {
    $('body').append('<div class="toggle-test"></div>');
    const toggleTest = new toggle('.toggle-test', {
      toggledClass: 'toggled-class',
      untoggledClass: 'untoggled-class'
    });
    toggleTest.render();
    expect(toggleTest.get()).toBe(null);
    toggleTest.$el.click();
    expect(toggleTest.get()).toBe(true);
  });
});
