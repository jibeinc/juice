const $ = require('jquery');
const expect = require('expect');
const MultiSelect = require('./index.js');

describe('multiSelect', () => {
  it('test initially all unchecked', () => {
    $('body').append('<div class="multiSelect-test"></div>');
    const categories = new MultiSelect('.multiSelect-test', {
      options: [{
        displayName: 'Marketing',
        value: 'mrkt01',
        count: 5
      }, {
        displayName: 'Sales',
        value: 'sales',
        count: 9
      }, {
        displayName: 'Engineering',
        value: 'eng-2015',
        count: 43
      }],
      renderItem(item) {
        return item.displayName + ' (' + item.count + ')';
      }
    });

    categories.subscribe((choice) => {
      categories.render();
    });

    categories.render();
    expect(Array.isArray(categories.get())).toBe(true);
    expect(categories.get().length).toBe(0);
  });
});
