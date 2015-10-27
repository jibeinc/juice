'use strict'

let BaseComponent = require('./BaseComponent');
let PSHub         = require('./PubSubHub');
let $             = require('jquery');

class CurrentLocation extends BaseComponent {
  constructor(el, geolocationAPI) {
    super(el);
    this.geolocationAPI = geolocationAPI;
    return this;
  }

  render() {
    this.$el.html(`<span>NEAR ME</span>`);
    this.$el.find('span').on('click', () => {
      this.getCurrentLocation();
    });
    return this;
  }

  set(lng, lat) {
    this.lng = lng;
    this.lat = lat;
    PSHub.publish(this.id, this.get());
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
  }
};

module.exports = CurrentLocation;