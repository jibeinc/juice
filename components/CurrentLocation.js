'use strict'

let BaseComponent = require('./BaseComponent');
let PSHub         = require('./PubSubHub');
let $             = require('jquery');

class CurrentLocation extends BaseComponent {
  constructor(el, opts) {
    super(el);
    this.url = opts.url;
    this.geolocationAPI = opts.geolocationAPI;
    return this;
  }

  render() {
    this.$el.css({
      display: 'block',
      width: '100px',
      height: '100px',
      cursor: 'pointer',
      'background-image': `url('${ this.url }')`,
      'background-size':   "cover",
      'background-repeat': "no-repeat"
    });
    this.$el.on('click', () => {
      this.getCurrentLocation();
    });
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