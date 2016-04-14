const $ = require('jquery');
const LocationTypeahead = require('./index.js');
const {simulateKeyPress} = require('../testHelpers.js');


describe('locationTypeahead functionality', () => {
  let locationSearch;

  beforeEach(() => {
    $('body').append('<div class="location-typeahead-test"></div>');

    const db = [
      {
        displayName: 'Boston, MA',
        lng: 74.134134,
        lat: 45.432433
      },
      {
        displayName: 'New York, NY',
        lng: 13.131442,
        lat: -45.854975
      },
      {
        displayName: 'Paris, TX',
        lng: 14.5264,
        lat: 1.425255
      },
      {
        displayName: 'Tokyo, Japan',
        lng: -74.43133,
        lat: 94.44466
      },
      {
        displayName: 'Houston, TX',
        lng: 4.083,
        lat: -45.133
      },
      {
        displayName: 'San Diego, CA',
        lng: 79.134134,
        lat: 98.432433
      },
      {
        displayName: 'Portland, ME',
        lng: 74.134134,
        lat: 45.432433
      },
      {
        displayName: 'Franklin, Tennesse',
        lng: 67.245245,
        lat: 26.677454
      },
      {
        displayName: 'Vancouver, BC',
        lng: 38.234443,
        lat: 39.341444
      },
      {
        displayName: 'Tel Aviv, Israel',
        lng: 63.97697,
        lat: 39.76766
      },
      {
        displayName: 'Portland, OR',
        lng: 13.578578,
        lat: 84.664646
      }
    ];

    const fetch = (term, cb) => {
      //We only want to fetch if it's not current location, so check for lat
      if (!term.lat) {
        const matches = db.filter((item) => {
          return (item.displayName + '').toLowerCase().indexOf(term.toLowerCase()) !== -1;
        });

        cb(matches);
      }
    };

    locationSearch = new LocationTypeahead('.location-typeahead-test', fetch, {
      geolocationAPI: window.navigator.geolocation,
      textInputOpts: {
        placeholder: 'Try "New York"'
      }
    });

    locationSearch.subscribe((choice) => {
      if (choice.isLocation) {
        console.log('location chosen', choice);
      } else {
        console.log(choice); // misc message
      }
    });

    locationSearch.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially no value', () => {
    expect(locationSearch.get()).toBe('');
  });
  it('test typing shows correct values', () => {
    locationSearch.textInput.set('n');
    expect(locationSearch.resultsListView.results.length).toBe(10);
    expect(locationSearch.resultsListView.results[0].displayName).toBe('Boston, MA');
    expect(locationSearch.resultsListView.results[1].displayName).toBe('New York, NY');
    locationSearch.textInput.set('');
    expect(locationSearch.resultsListView.results[0].displayName).toBe(undefined);
  });
  it('test up/down arrows and enter', () => {
    expect(locationSearch.resultsListView.$el).toBeHidden();
    locationSearch.textInput.$el.find('input').focus();
    locationSearch.textInput.set('n');
    expect(locationSearch.resultsListView.$el).toBeVisible();
    //Press down to highlight an option
    simulateKeyPress(40, $(document));
    //Press enter to choose the highlighted option
    simulateKeyPress(13, $(document));
    expect(locationSearch.get().displayName).toBe('Boston, MA');
    locationSearch.textInput.$el.find('input').focus();
    locationSearch.textInput.set('n');
    //Down, down, down, up, down, up
    simulateKeyPress(40, $(document));
    simulateKeyPress(40, $(document));
    simulateKeyPress(40, $(document));
    simulateKeyPress(38, $(document));
    simulateKeyPress(40, $(document));
    simulateKeyPress(38, $(document));
    //Press enter to choose the highlighted option
    simulateKeyPress(13, $(document));
    expect(locationSearch.get().displayName).toBe('New York, NY');
    //Blur after selection
    expect(locationSearch.resultsListView.$el).toBeHidden();
  });
  it('test click selection', () => {
    expect(locationSearch.resultsListView.$el).toBeHidden();
    expect(locationSearch.get()).toBe('');
    locationSearch.textInput.$el.find('input').focus();
    locationSearch.textInput.set('n');
    expect(locationSearch.resultsListView.$el).toBeVisible();
    locationSearch.resultsListView.$el.find('li').first().click();
    expect(locationSearch.resultsListView.$el).toBeHidden();
    expect(locationSearch.get().displayName).toBe('Boston, MA');
  });
});
