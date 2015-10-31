'use strict'

require('./styles.css');

let $             = require('jquery');
let BaseComponent = require('../BaseComponent');
let PSHub         = require('../PubSubHub');

const iconURL     = require('./location.png');

class CurrentLocation extends BaseComponent {
  constructor(el, opts) {
    super(el);
    this.iconURL = opts.iconURL || iconURL;
    this.geolocationAPI = opts.geolocationAPI;
    return this;
  }

  render() {
    this.$el.on('click', () => {
      this.getCurrentLocation();
    });
    this.$el.css('background-url', this.iconURL);
    return this;
  }

  set(lng, lat) {
    this.lng = lng;
    this.lat = lat;
    PSHub.publish(this.id, this.get());
    return this;
  }

  get() {
    return {
      lng: this.lng,
      lat: this.lat
    };
  }

  getCurrentLocation() {
    this.geolocationAPI.getCurrentPosition((position) => {
      this.set(position.coords.longitude, position.coords.latitude);
    });
    return this;
  }
};

module.exports = CurrentLocation;