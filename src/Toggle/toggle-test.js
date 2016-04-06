const $ = require('jquery');
const toggle = require('./index.js');

describe('toggle', () => {
  let toggleTest;

  beforeEach(() => {
    $('body').append('<div class="toggle-test"></div>');
    toggleTest = new toggle('.toggle-test', {
      toggledClass: 'toggled-class',
      untoggledClass: 'untoggled-class'
    });
    toggleTest.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially untoggled', () => {

    expect(toggleTest.get()).toBe(null);
    toggleTest.$el.click();
    expect(toggleTest.get()).toBe(true);
  });
});
