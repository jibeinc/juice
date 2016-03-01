'use strict';

require('./styles.css');
const inputTmpl = require('./input.tmpl');
const $ = require('jquery');
const TextInput = require('../TextInput');
const CurrentLocation = require('../CurrentLocation');

/**
 * This TextInput Implementation provides additional UI behaviors to the icon element
 * over the default TextInput class.
 * - If the icon is clicked while the value is empty, the browser's GeoLocation API
 * will default the value with the user's current location
 *
 * @author: Naveed Nadjmabadi
 */
class LocationTextInput extends TextInput {
  /**
   * Creates a new LocationTextInput
   * @param {string} el - the selector for the element to attach to
   * @param {object} opts - The options for the component
   */
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      locationIcon: null,
      $location: null
    });
  }

  /**
   * Gets the current value, and is it has a displayName, finds that
   * @returns {string} The current value
   */
  get() {
    if ($.isPlainObject(this.value) && this.value.displayName) {
      return this.value.displayName;
    }

    return super.get();
  }

  /**
   * Sets the value of the LocationTextInput
   * @param {string|object} v - the value to set
   */
  set(v) {

    // If the textInput contains location data
    if (typeof v === 'object') {
      this.value = v;

      if (this.$input) {
        this.$input.val(v.isLocation ? 'Use the Current Location' : v.displayName);
      }

      this.publish(this.get());
      this.showHideIcon();
    }
    else {
      super.set(v);
    }
  }

  /**
   * Renders the html for the LocationTextInput and its CurrentLocation icon
   */
  renderDom() {
    // the base input
    this.$el.html(inputTmpl(this));
    this.$input = this.$el.find('input');

    this.$icon = this.$el.find('.ui-text-input-icon');

    // adding the CurrentLocation sub-component
    this.locationIcon = new CurrentLocation('.ui-location-icon');
    this.$locationIcon = this.$el.find('.ui-location-icon');

    this.locationIcon.subscribe((event) => {
      if (event.isLocation) {
        this.set(event);
      }
    });

    this.locationIcon.render();
  }

  /**
   * Shows or hides the icon
   */
  showHideIcon() {
    if (this.$icon) {
      if (this.get()) {
        this.$icon.show();
        this.$locationIcon.hide();
      }
      else {
        this.$icon.hide();
        this.$locationIcon.show();
      }
    }
  }
}

module.exports = LocationTextInput;
