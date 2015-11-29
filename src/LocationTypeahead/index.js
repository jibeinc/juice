// # Location Search Typeahead
//
//   Extends `Typeahead` class to:
//
//   - add a "use my current location" icon to text input
//   - add fixed result that triggers "use my current location" on click

// styles
require('./styles.css');

// scripts
const Typeahead       = require('../Typeahead');
const FragFactory     = require('../BaseFragmentFactory');
const CurrentLocation = require('../CurrentLocation');

class LocationTypeahead extends Typeahead {
  constructor(el, opts={}) {

    const iconFactory = new FragFactory({
      render: () => {
        return '<div class="ui-current-location-icon"></div>';
      },

      controller: () => {
        const currentLocationIcon = new CurrentLocation('.ui-current-location-icon', {
          geolocationAPI: opts.geolocationAPI
        });

        currentLocationIcon.subscribe((event) => {
          if (event.isLocation) {
            this.set(event);
            this.textInput.$input.val('Your current location'); // just for display
          }
        });

        currentLocationIcon.render();
      }
    });

    // setup our clearing icon to be
    opts.textInputOpts = {
      icon: iconFactory.make(),
      iconClearsValue: false
    };

    super(el, opts);
  }
}

module.exports = LocationTypeahead;
