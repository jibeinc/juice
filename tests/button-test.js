const Button = require('../src/Button/index.js');

describe('button functionality', () => {
  let btn;
  beforeEach(() => {
    $('body').append('<div class="button-test"></div>');
    btn = new Button('.button-test', {
      label: 'Search',
      preventPropagation: true,
      submit: true
    });

    btn.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test publish called on button click', () => {
    spyOn(btn, 'publish');
    btn.$el.find('button').trigger('click');
    expect(btn.publish).toHaveBeenCalled();
  });
});
