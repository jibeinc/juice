'use strict';

const BaseComponent = require('../BaseComponent');
const $ = require('jquery');
const simplePagination = require('imports?jQuery=jquery!../../node_modules/simplePagination.js/jquery.simplePagination.js');
const paginationTmpl = require('./pagination.dot');

class Pagination extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      cssStyle: opts.cssStyle || 'pagination',
      edges: opts.edges || 0,
      hrefTextPrefix: opts.hrefTextPrefix || '#page-',
      items: opts.items || 100,
      itemsOnPage: opts.itemsOnPage || 10,
      value: opts.currentPage || 1
    });
  }

  render() {
    this.$el.pagination({
      currentPage: this.get(),
      cssStyle: this.cssStyle,
      edges: this.edges,
      hrefTextPrefix: this.hrefTextPrefix,
      items: this.items,
      itemsOnPage: this.itemsOnPage
    });
    return this.$el.html();
  }
}

module.exports = Pagination;
