'use strict';

const BaseComponent = require('../BaseComponent');
const $ = require('jquery');
const simplePagination = require('imports?jQuery=jquery!../../node_modules/simplePagination.js/jquery.simplePagination.js');
const paginationTmpl = require('./pagination.dot');

class Pagination extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);

    this.$el.pagination({
      cssStyle: opts.cssStyle || 'pagination',
      edges: opts.edges || 0,
      hrefTextPrefix: opts.hrefTextPrefix || '#page-',
      items: 100,
      itemsOnPage: opts.itemsOnPage || 10
    });
  }

  render() {
    return this.$el.html();
  }
}

module.exports = Pagination;
