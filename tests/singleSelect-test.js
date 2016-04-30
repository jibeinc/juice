const SingleSelect = require('../src/SingleSelect/index.js');

describe('SingleSelect functionality with simple values', () => {
  let categories;

  beforeEach(() => {
    $('body').append('<div class="singleSelect-test"></div>');
    categories = new SingleSelect('.singleSelect-test', {
      options: ['Jan', 'Feb', 'March']
    });

    categories.subscribe(() => {
      categories.render();
    });

    categories.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially value to be null', () => {
    expect(categories.get()).toBeNull();
  });

  it('test setting a value programatically', () => {
    categories.set({
      value: 'Jan'
    });
    const selected = categories.get();
    expect(selected.value).toBe('Jan');
  });
});

describe('SingleSelect functionality with objects', () => {
  let categories;

  beforeEach(() => {
    $('body').append('<div class="singleSelect-test"></div>');
    categories = new SingleSelect('.singleSelect-test', {
      options: [{
        display: 'Marketing',
        value: 'mrkt01'
      }, {
        display: 'Sales',
        value: 'sales'
      }, {
        display: 'Engineering',
        value: 'eng-2015'
      }]
    });

    categories.subscribe(() => {
      categories.render();
    });

    categories.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially all unchecked', () => {
    expect(categories.get()).toBeNull();
  });

  it('test checking an option programatically', () => {
    categories.set({
      displayName: 'Marketing',
      value: 'mrkt01'
    });

    const selected = categories.get();
    expect(selected.value).toBe('mrkt01');
  });

  it('should correctly display value', () => {
    categories.set('mrkt01');
    const displayValue = categories.getDisplayValue();
    expect(displayValue).toBe('Marketing');
  });
});
