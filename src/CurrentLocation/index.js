'use strict';

require('./styles.css');
const iconURL = require('./location.png');
const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

/**
 * Class for creating an icon to click and use your current location
 */
class CurrentLocation extends BaseComponent {
  /**
   * Creates a CurrentLocation component
   * @param {string} el - The selector for the element to put the CurrentLocation component in
   * @param {object} opts - The options for the component
   * @param {string} opts.iconURL - The path to the icon image to use
   * @param {*} opts.geolocationAPI - The api to call to get the current location
   * @returns {CurrentLocation} The CurrentLocation instance
   */
  constructor(el, opts = {}) {
    super(el);
    this.iconURL = opts.iconURL || iconURL;
    this.geolocationAPI = opts.geolocationAPI || window.navigator.geolocation;
    return this;
  }

  /**
   * Returns an object with the current location lat and lng
   * @returns {{lng: number, lat: number, isLocation: boolean}} The current location object
   */
  get() {
    return {
      lng: this.lng,
      lat: this.lat,
      isLocation: true
    };
  }

  /**
   * Calls geolocationAPI to get the current location, and sets the location
   * @returns {CurrentLocation} The CurrentLocation instance
   */
  getCurrentLocation() {
    this.publish('current-location-requested');
    this.geolocationAPI.getCurrentPosition((position) => {
      this.set(position.coords.longitude, position.coords.latitude);
    }, (error) => {
      console.error(error.message);
      this.publish(error);
    });
    return this;
  }

  /**
   * Render the html for the CurrentLocation component and apply event handlers
   * @returns {string} The html for the component
   */
  render() {
    this.$el.addClass('ui-current-location');
    Utils.bindClick(this.$el, (evt) => {
      evt.stopPropagation();
      this.getCurrentLocation();
    });

    this.$el.css('background-image', `url(${ this.iconURL })`);
    return this.$el.html();
  }

  /**
   * Sets the lat and lng for the current location and publishes the result
   * @param {number} lng - The longitude of your location
   * @param {number} lat - The latitude of your location
   * @returns {CurrentLocation} The CurrentLocation instance
   */
  set(lng, lat) {
    this.lng = lng;
    this.lat = lat;
    this.publish(this.get());
    return this;
  }
}

module.exports = CurrentLocation;
