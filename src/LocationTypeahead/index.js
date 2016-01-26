// # Location Search Typeahead
//
//   Extends `Typeahead` class to:
//
//   - add a "use my current location" icon to text input
//   - add fixed result that triggers "use my current location" on click

// styles
require('./styles.css');

// html
const currentLocationTemplate = require('./useMyCurrentLocation.tmpl');

// scripts
const $ = require('jquery');
const Typeahead = require('../Typeahead');
const LocationTextInput = require('../LocationTextInput');
const FragFactory = require('../BaseFragmentFactory');
const CurrentLocation = require('../CurrentLocation');

class LocationTypeahead extends Typeahead {
  constructor(el, opts = {}) {

    // define the "current location" icon DOM fragment
    const iconFactory = new FragFactory({
      render: (data) => {
        data.displayValue = data.name === 'listItem' ? 'inline' : 'none';
        return currentLocationTemplate(data);
      },

      controller: (data) => {
        const currentLocationIcon = new CurrentLocation('.ui-current-location-' + data.name);

        currentLocationIcon.subscribe((event) => {
          if (event.isLocation) {
            event.listItem = true; // set this to prevent repeating
            this.set(event);
          }
        });
        currentLocationIcon.render();
      }
    });

    // setup "current location" fixed result
    opts.fixedResults = (opts.fixedResults || []).concat([{
      useMyCurrentLocation: true,
      preSelectHook: (item) => {
        $('.ui-current-location-listItem').click(); // trigger 'use my location' icon
        return false; // don't run normal selection behavior
      }
    }]);

    super(el, opts);

    this.iconFactory = iconFactory;
    this.$el.addClass('ui-location-typeahead');
  }

  setupTextInput(textInputOpts) {
    return new LocationTextInput(this.$el.find('.input-container'), textInputOpts);
  }

  handleTextInputUpdates() {
    // when text input gets a new value, update typeahead:
    this.textInput.subscribe((v) => {

      if (v === '') {
        this.setInternal({});
      }

      else if ($.isPlainObject(v) && v.isLocation && !v.listItem) {
        this.setInternal(v);
      }

      else {
        super.handleTextInputUpdates();
      }
    });
  }

  renderItem(item) {
    if (item && item.useMyCurrentLocation) {
      return this.iconFactory.make({
        name: 'listItem'
      });
    } else {
      return super.renderItem(item);
    }
  }

  set(v) {
    this.textInput.set(v);
    this.setInternal(v);
    return this;
  }
}

module.exports = LocationTypeahead;
