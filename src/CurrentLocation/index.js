'use strict'

// css
require('./styles.css');

// assets
const iconURL = require('./location.png');

// scripts
const $             = require('jquery');
const BaseComponent = require('../BaseComponent');

class CurrentLocation extends BaseComponent {
  constructor(el, opts={}) {
    super(el);
    this.iconURL = opts.iconURL || iconURL;
    this.geolocationAPI = opts.geolocationAPI || window.navigator.geolocation;
    return this;
  }

  render() {
    this.$el.addClass('ui-current-location');
    this.$el.on('click', (evt) => {
      evt.stopPropagation();
      this.getCurrentLocation();
    });
    this.$el.css('background-image', `url(${ this.iconURL })` );
    return this.$el.html();
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
