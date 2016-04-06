const $ = require('jquery');
const Button = require('./index.js');

describe('button functionality', () => {
  let btn;
  beforeEach(() => {
    $('body').append('<div class="button-test"></div>');
    btn = new Button('.button-test', {
      label: 'Search',
      submit: true
    });

    btn.subscribe(() => {
      console.log('clicked!');
    });

    btn.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test publish called on button click', () => {
    spyOn(btn, 'publish');
    btn.$el.find('button').click();

    expect(btn.publish).toHaveBeenCalled();
  });
});
