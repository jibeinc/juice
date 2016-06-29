const CurrentLocation = require('../src/CurrentLocation/index.js');

describe('CurrentLocation functionality', () => {
  let loc;

  beforeEach(() => {
    const fakeGeolocationAPI = {
      getCurrentPosition: (cb) => {
        const position = {
          coords: {
            latitude: 37.66669,
            longitude: -73.0000023
          }
        };

        return cb(position);
      }
    };

    $('body').append('<div class="location-test"></div>');
    loc = new CurrentLocation('.location-test', {geolocationAPI: fakeGeolocationAPI});

    loc.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test gettingCurrentLocation from navigation api', () => {
    spyOn(loc, 'publish');
    loc.$el.trigger('click');
    expect(loc.publish).toHaveBeenCalledWith('current-location-requested');
  });

  it('test setting its location', (done) => {
    loc.getCurrentLocation();

    setTimeout(() => {
      const res = loc.get();
      expect(res.isLocation).toBe(true);
      expect(res.lat).toBe(37.66669);
      expect(res.lng).toBe(-73.0000023);
      done();
    }, 10);
  });
});

describe('CurrentLocation error handling', () => {
  let loc;

  beforeEach(() => {
    const fakeGeolocationAPI = {
      getCurrentPosition: (success, failure) => {
        failure('BLAH MOCK API FAILURE');
        throw new Error('BLAH MOCK API FAILURE');
      }
    };

    $('body').append('<div class="location-test"></div>');
    loc = new CurrentLocation('.location-test', {geolocationAPI: fakeGeolocationAPI});

    loc.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test getCurrentLocation failure', () => {
    expect(() => {
      loc.getCurrentLocation();
    }).toThrowError('BLAH MOCK API FAILURE');
  });
});
