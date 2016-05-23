/* eslint-disable max-nested-callbacks */

const MultiSelect = require('../src/MultiSelect/index.js');

describe('multiSelect functionality', () => {
  let categories;

  beforeEach(() => {
    $('body').append('<div class="multiSelect-test"></div>');
    categories = new MultiSelect('.multiSelect-test', {
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

    categories.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('should have all checkboxes initially unchecked', () => {
    expect(Array.isArray(categories.get())).toBe(true);
    expect(categories.get().length).toBe(0);
  });

  it('should be able to check an option programatically', () => {
    categories.set(['mrkt01', 'sales']);
    const selected = categories.get();
    expect(selected.length).toBe(2);
    expect(selected[0].value).toBe('mrkt01');
    expect(selected[1].value).toBe('sales');
  });

  it('should click a single checkbox span and set the value', (done) => {
    const elementToClick = $($('.select-option')[0]).find('span');
    elementToClick.trigger('click');
    setTimeout(() => {
      const selected = categories.get();
      expect(selected.length).toBe(1);
      expect(selected[0].value).toBe('mrkt01');
      done();
    }, 100);
  });

  it('should click a single checkbox directly and set the value', (done) => {
    const elementToClick = $($('.select-option')[1]).find('input');
    elementToClick.trigger('change');
    setTimeout(() => {
      const selected = categories.get();
      expect(selected.length).toBe(1);
      expect(selected[0].value).toBe('sales');
      done();
    }, 100);
  });

  it('should click multiple checkbox labels and set the value', (done) => {
    // click the first element
    const elementToClick = $($('.select-option')[0]).find('input');
    const elementToClick2 = $($('.select-option')[1]).find('input');
    elementToClick.trigger('change');
    setTimeout(() => {
      let selected = categories.get();
      expect(selected.length).toBe(1);
      expect(selected[0].value).toBe('mrkt01');
      elementToClick2.trigger('change');
      setTimeout(() => {
        selected = categories.get();
        expect(selected.length).toBe(2);
        expect(selected[0].value).toBe('mrkt01');
        expect(selected[1].value).toBe('sales');
        // click the first element again, de-selecting it
        elementToClick.trigger('change');
        setTimeout(() => {
          selected = categories.get();
          expect(selected.length).toBe(1);
          expect(selected[0].value).toBe('sales');
          done();
        }, 50);
      }, 50);
    }, 50);
  });

  it('should click multiple checkboxes directly and set the value', (done) => {
    const elementToClick = $($('.select-option')[2]).find('input');
    const elementToClick2 = $($('.select-option')[0]).find('input');

    elementToClick.trigger('change');

    setTimeout(() => {
      let selected = categories.get();
      expect(selected.length).toBe(1);
      expect(selected[0].value).toBe('eng-2015');

      // click the second element
      elementToClick2.trigger('change');

      setTimeout(() => {
        selected = categories.get();
        expect(selected.length).toBe(2);
        expect(selected[0].value).toBe('mrkt01');
        expect(selected[1].value).toBe('eng-2015');

        // click the second element again, de-selecting it
        elementToClick2.trigger('change');

        setTimeout(() => {
          selected = categories.get();
          expect(selected.length).toBe(1);
          expect(selected[0].value).toBe('eng-2015');
          done();
        }, 50);
      }, 50);
    }, 50);
  });
});
