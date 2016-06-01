const TextInput = require('../src/TextInput/index.js');
const {simulateKeyPress} = require('./testHelpers.js');

describe('textInput', () => {
  let textInput;

  beforeEach(() => {
    $('body').append('<div class="text-input-test"></div>');
    textInput = new TextInput('.text-input-test',
      {
        submitHandler() {
          console.log('the enter key has been pressed!');
        },
        placeholder: 'What up?',
        icon: 'X',
        wait: 10
      });
    textInput.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test icon click', () => {
    textInput.set('New value woot!');
    expect(textInput.get()).toBe('New value woot!');
    textInput.$icon.trigger('click');
    expect(textInput.get()).toBe('');
  });

  it('test keyUp', (done) => {
    expect(textInput.get()).toBe('');
    // Type new value
    textInput.$input.val('new value test');
    console.log('new val:', textInput.$input.val());
    // Press Enter
    simulateKeyPress(13, textInput.$input, 'keyup');
    setTimeout(() => {
      expect(textInput.get()).toBe('new value test');
      done();
    }, 50);
  });
});
