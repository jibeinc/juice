'use strict'

// CSS
require('./styles.css');

// assets
const iconURL = require('./location.png');

// scripts
let $             = require('jquery');
let BaseComponent = require('../BaseComponent');

class CurrentLocation extends BaseComponent {
  constructor(el, opts) {
    super(el);
    opts = opts || {};
    this.iconURL = opts.iconURL || iconURL;
    this.geolocationAPI = opts.geolocationAPI;
    return this;
  }

  render() {
    this.$el.addClass('ui-current-location');
    this.$el.on('click', () => {
      this.getCurrentLocation();
    });
    this.$el.css('background-image', `url(${ this.iconURL })` );
    return this;
  }

  set(lng, lat) {
    this.lng = lng;
    this.lat = lat;
    this.publish(this.get());
    return this;
  }

  get() {
    return {
      lng: this.lng,
      lat: this.lat,
      isLocation: true
    };
  }

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
};

module.exports = CurrentLocation;
