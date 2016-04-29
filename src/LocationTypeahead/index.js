require('./styles.css');
const currentLocationTemplate = require('./useMyCurrentLocation.tmpl');
const Typeahead = require('../Typeahead');
const LocationTextInput = require('../LocationTextInput');
const FragFactory = require('../BaseFragmentFactory');
const CurrentLocation = require('../CurrentLocation');
const Utils = require('../Utils.js');

/**
 * Location Search Typeahead
 * Extends `Typeahead` class to:
 * - add a "use my current location" icon to text input
 * - add fixed result that triggers "use my current location" on click
 */
class LocationTypeahead extends Typeahead {
  /**
   * Create a new LocationTypeahead
   * @param {string} el - The selector for the element to put the LocationTypeahed in
   * @param {function} fetch - The function to call to fetch/refresh results
   * @param {object} opts - The options for the component
   * @param {*[]} [opts.fixedResults] - An array of results to always display
   */
  constructor(el, fetch, opts = {}) {
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
      preSelectHook: () => {
        $('.ui-current-location-listItem').trigger('click'); // trigger 'use my location' icon
        return false; // don't run normal selection behavior
      }
    }]);

    super(el, fetch, opts);

    this.iconFactory = iconFactory;
    this.$el.addClass('ui-location-typeahead');
  }

  /**
   * Handles when the text input updates and sets the Typeahead
   */
  handleTextInputUpdates() {
    this.textInput.subscribe((v) => {
      if (Utils.isPlainObject(v) && v.isLocation && !v.listItem) {
        this.setInternal(v);
      }
    });

    super.handleTextInputUpdates();
  }

  /**
   * Render the item based on the supplied iconFactory
   * @param {object} item - The item to display in the ListView
   * @returns {*} The markup for the icon
   */
  renderItem(item) {
    if (item && item.useMyCurrentLocation) {
      return this.iconFactory.make({
        name: 'listItem'
      });
    } else {
      return super.renderItem(item);
    }
  }

  /**
   * Sets the value of the LocationTypeahead
   * @param {string} v - The value for the LocationTypeahead
   * @returns {LocationTypeahead} The instance
   */
  set(v) {
    this.textInput.set(v);
    this.setInternal(v);
    this.textInput.$el.find('input').trigger('blur');
    return this;
  }

  /**
   * Creates a new LocationTextInput for use with the LocationTypeahead
   * @param {object} textInputOpts - The options for the LocationTextInput
   * @returns {LocationTextInput} A new LocationTextInput
   */
  setupTextInput(textInputOpts) {
    return new LocationTextInput(this.$el.find('.input-container'), textInputOpts);
  }
}

module.exports = LocationTypeahead;
