const $ = require('jquery');
const expect = require('expect');
const Typeahead = require('./index.js');
const {simulateKeyPress} = require('../testHelpers.js');


describe('typeahead functionality', () => {
  let searchNumbers;

  beforeEach(() => {
    $('body').append('<div class="typeahead-test"></div>');

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
        return (item.displayName + '').indexOf(term) !== -1;
      });

      cb(matches);
    };

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
    searchNumbers.textInput.$el.find('input').focus();
    searchNumbers.textInput.set('1');
    //Press down to highlight an option
    simulateKeyPress(40, $(document));
    //Press enter to choose the highlighted option
    simulateKeyPress(13, $(document));
    expect(searchNumbers.get().displayName).toBe(18045972508);
  });
});
