'use strict';

/*
 **  @class: LocationTextInput
 **  @description:
 **    This textInput Implementation provides additional UI behaviors to the icon element
 **    over the default textInput class.
 **      - If the icon is clicked while the value is empty, the browser's GeoLocation API
 **        will default the value with the user's current location
 **
 **  @param {String} el - the DOM element to attach to
 **  @param {Object} opts - the options to configure this element
 **
 **  @author: Naveed Nadjmabadi
 */

// css
require('./styles.css');

// html
const inputTmpl = require('./input.tmpl');

// scripts
const TextInput = require('../TextInput');
const CurrentLocation = require('../CurrentLocation');

class LocationTextInput extends TextInput {

  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      locationIcon: null,
      $location: null
    });

    return this;
  }

  get() {

    if ($.isPlainObject(this.value) && this.value.displayName) {
      return this.value.displayName;
    }

    return super.get();
  }

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
