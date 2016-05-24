const RadioButtons = require('../src/RadioButtons/index.js');

const inputSelector = '.radio-buttons-test .ui-radio-buttons .select-option input';
const testOptions = [{
  count: 5,
  displayName: 'Marketing',
  value: 'mrkt01'
}, {
  count: 9,
  displayName: 'Sales',
  value: 'sales'
}, {
  count: 43,
  displayName: 'Engineering',
  value: 'eng-2015'
}];

const setupRadioBoxes = (options) => {
  const categories = new RadioButtons('.radio-buttons-test', {
    options,
    radioBoxes: true,
    renderItem(item) {
      return item.displayName + ' (' + item.count + ')';
    }
  });

  categories.subscribe(() => {
    categories.render();
  });

  categories.render();

  return categories;
};

describe('radioButtons functionality', () => {
  let categories;

  beforeEach(() => {
    $('body').append('<div class="radio-buttons-test"></div>');
    categories = new RadioButtons('.radio-buttons-test', {
      options: testOptions,
      renderItem(item) {
        return item.displayName + ' (' + item.count + ')';
      }
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
    expect(Array.isArray(categories.get())).toBe(false);
    expect(categories.get()).toBe(null);
  });
  it('test checking an option', () => {
    categories.set('mrkt01');
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    $($(inputSelector)[0]).trigger('change');
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    // Ensure multiple clicks do not deselect the value, since it is a radio button
    $($(inputSelector)[0]).trigger('change');
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    $($(inputSelector)[1]).trigger('change');
    expect(categories.get().value).toBe('sales');
    expect(categories.get().checked).toBe(true);
  });
});

describe('radioBoxes functionality', () => {
  let categories;
  beforeEach(() => {
    $('body').append('<div class="radio-buttons-test"></div>');
    categories = setupRadioBoxes(testOptions);
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially all unchecked', () => {
    expect(Array.isArray(categories.get())).toBe(false);
    expect(categories.get()).toBe(null);
  });
  it('test checking an option', () => {
    $($(inputSelector)[0]).trigger('change');
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    // Ensure multiple clicks deselect the value, since these are radioboxes and we are allowed to uncheck
    $($(inputSelector)[0]).trigger('change');
    expect(categories.get()).toBe(null);
    $($(inputSelector)[1]).trigger('change');
    expect(categories.get().value).toBe('sales');
    expect(categories.get().checked).toBe(true);
  });
});
describe('string options functionality', () => {
  let categories;
  const stringOptions = [
    'mrkt01',
    'sales',
    'eng-2015'
  ];
  beforeEach(() => {
    $('body').append('<div class="radio-buttons-test"></div>');
    categories = setupRadioBoxes(stringOptions);
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test string opts', () => {
    $($(inputSelector)[0]).trigger('change');
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    // Ensure multiple clicks deselect the value, since these are radioboxes and we are allowed to uncheck
    $($(inputSelector)[0]).trigger('change');
    expect(categories.get()).toBe(null);
    $($(inputSelector)[1]).trigger('change');
    expect(categories.get().value).toBe('sales');
    expect(categories.get().checked).toBe(true);
  });
});
