'use strict';

const Typeahead = require('./index.js');
const {simulateKeyPress} = require('../testHelpers.js');
const db = [{
  displayName: 18045972508
}, {
  displayName: 22458484822
}, {
  displayName: 44444449393
}, {
  displayName: '11234rrwer4'
}, {
  displayName: 324224 - 445
}, {
  displayName: '94df-847s-f49'
}];

const fetch = function (term, cb) {
  const matches = db.filter((item) => {
    return (String(item.displayName)).indexOf(term) !== -1;
  });

  cb(matches);
};

describe('typeahead functionality', () => {
  let searchNumbers;

  beforeEach(() => {
    $('body').append('<div class="typeahead-test"></div>');

    searchNumbers = new Typeahead('.typeahead-test', fetch, {
      allowFreeForm: true,
      fixedResults: [{
        displayName: '-- use my membership id --'
      }]
    });

    searchNumbers.subscribe((choice) => {
      console.log('new numba', choice);
    });

    searchNumbers.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially no value', () => {
    expect(searchNumbers.get()).toBe('');
  });
  it('test typing shows correct values', () => {
    searchNumbers.textInput.set('1');
    expect(searchNumbers.resultsListView.results.length).toBe(3);
    expect(searchNumbers.resultsListView.results[0].displayName).toBe(18045972508);
    expect(searchNumbers.resultsListView.results[1].displayName).toBe('11234rrwer4');
    searchNumbers.textInput.set('');
    expect(searchNumbers.resultsListView.results[0].displayName).toBe('-- use my membership id --');
  });
  it('test up/down arrows and enter', () => {
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('1');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
    // Press ESC to close typeahead
    simulateKeyPress(27, $(document));
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('1');
    // Press down to highlight an option
    simulateKeyPress(40, $(document));
    // Press enter to choose the highlighted option
    simulateKeyPress(13, $(document));
    expect(searchNumbers.get().displayName).toBe(18045972508);
    // Blur after selection
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('1');
    // Down, down, down, up, down, up
    simulateKeyPress(40, $(document));
    simulateKeyPress(40, $(document));
    simulateKeyPress(40, $(document));
    simulateKeyPress(38, $(document));
    simulateKeyPress(40, $(document));
    simulateKeyPress(38, $(document));
    // Press enter to choose the highlighted option
    simulateKeyPress(13, $(document));
    expect(searchNumbers.get().displayName).toBe('11234rrwer4');
    // Blur after selection
    expect(searchNumbers.resultsListView.$el).toBeHidden();
  });
  it('test "g" keydown does nothing', () => {
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('1');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
    // Press down to highlight an option
    simulateKeyPress(40, $(document));
    // Press "g" which should do nothing
    simulateKeyPress(71, $(document));
    expect(searchNumbers.get().displayName).toBeUndefined();
  });
  it('test click selection', () => {
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    expect(searchNumbers.get()).toBe('');
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('1');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
    searchNumbers.resultsListView.$el.find('li').first().trigger('mousedown');
    searchNumbers.resultsListView.$el.find('li').first().trigger('click');
    // Blur after selection
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    expect(searchNumbers.get().displayName).toBe(18045972508);
  });
  it('test manual text entry', () => {
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    expect(searchNumbers.get()).toBe('');
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('custom value');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
    // Press enter to set a custom value
    simulateKeyPress(13, $(document));
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    expect(searchNumbers.get()).toBe('custom value');
  });
  it('ensure mousedown on results list does not blur', () => {
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('custom value');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
    searchNumbers.resultsListView.$el.trigger('mousedown');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
  });
  it('no fixed results, allowFreeform', () => {
    $('body').append('<div class="typeahead-test"></div>');

    searchNumbers = new Typeahead('.typeahead-test', fetch, {
      allowFreeForm: true
    });

    searchNumbers.subscribe((choice) => {
      console.log('new numba', choice);
    });

    searchNumbers.render();

    expect(searchNumbers.resultsListView.$el).toBeHidden();
    expect(searchNumbers.get()).toBe('');
    searchNumbers.textInput.$el.find('input').trigger('focus');
    searchNumbers.textInput.set('custom value');
    expect(searchNumbers.resultsListView.$el).toBeVisible();
    // Press enter to set a custom value
    simulateKeyPress(13, $(document));
    expect(searchNumbers.resultsListView.$el).toBeHidden();
    expect(searchNumbers.get()).toBe('custom value');
  });
});
