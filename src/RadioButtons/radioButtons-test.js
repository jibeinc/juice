const $ = require('jquery');
const expect = require('expect');
const RadioButtons = require('./index.js');

describe('radioButtons functionality', () => {
  let categories;

  beforeEach(() => {
    $('body').append('<div class="radio-buttons-test"></div>');
    categories = new RadioButtons('.radio-buttons-test', {
      options: [{
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
      }],
      renderItem(item) {
        return item.displayName + ' (' + item.count + ')';
      }
    });

    categories.subscribe(() => {
      categories.render();
    });

    categories.render();
  });

  afterEach(()=> {
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
    let elementToClick = $($('.radio-buttons-test .ui-radio-buttons .select-option input')[0]);
    elementToClick.click();
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    //Ensure multiple clicks do not deselect the value, since it is a radio button
    elementToClick.click();
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    elementToClick = $($('.radio-buttons-test .ui-radio-buttons .select-option input')[1]);
    elementToClick.click();
    expect(categories.get().value).toBe('sales');
    expect(categories.get().checked).toBe(true);
  });
});

describe('radioBoxes functionality', () => {
  let categories;
  beforeEach(() => {
    $('body').append('<div class="radio-buttons-test"></div>');
    categories = new RadioButtons('.radio-buttons-test', {
      options: [{
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
      }],
      radioBoxes: true,
      renderItem(item) {
        return item.displayName + ' (' + item.count + ')';
      }
    });

    categories.subscribe(() => {
      categories.render();
    });

    categories.render();
  });

  afterEach(()=> {
    $('body').empty();
  });

  it('test initially all unchecked', () => {
    expect(Array.isArray(categories.get())).toBe(false);
    expect(categories.get()).toBe(null);
  });
  it('test checking an option', () => {
    debugger;
    let elementToClick = $($('.radio-buttons-test .ui-radio-buttons .select-option input')[0]);
    elementToClick.click();
    expect(categories.get().value).toBe('mrkt01');
    expect(categories.get().checked).toBe(true);
    //Ensure multiple clicks deselect the value, since these are radioboxes and we are allowed to uncheck
    elementToClick.click();
    expect(categories.get()).toBe(null);
    elementToClick = $($('.radio-buttons-test .ui-radio-buttons .select-option input')[1]);
    elementToClick.click();
    expect(categories.get().value).toBe('sales');
    expect(categories.get().checked).toBe(true);
  });
});
