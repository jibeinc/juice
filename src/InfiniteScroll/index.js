'use strict';

const $ = require('jquery');
const BaseComponent = require('../BaseComponent');

class InfiniteScroll extends BaseComponent {
  constructor(el, opts = {}) {
    super(el, {
      preserveChildElements: true
    });

    if (!opts.list) {
      throw new Error('No ListView provided. One is required for InfiniteScroll');
    }
    else {
      this.list = opts.list;
    }
    if (opts.windowScroll) {
      $(window).scroll(() => {
        const wintop = $(window).scrollTop();
        const docheight = $(document).height();
        const winheight = $(window).height();
        const scrollTrigger = opts.scrollTrigger || 0.95;

        if ((wintop / (docheight - winheight)) > scrollTrigger) {
          console.log('scroll bottom');
          this.list.refresh();
        }
      });
    }
    else {

    }
    return this;
  }


  render() {
    return this.$el.html();
  }
}

module.exports = InfiniteScroll;