'use strict';

require('imports?jQuery=jquery!../../node_modules/simplePagination/jquery.simplePagination.js');
const BaseComponent = require('../BaseComponent');

class Pagination extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      cssStyle: opts.cssStyle || 'pagination',
      edges: opts.edges || 0,
      hrefTextPrefix: opts.hrefTextPrefix || '#page-',
      items: opts.items || 100,
      itemsOnPage: opts.itemsOnPage || 10,
      nextText: opts.nextText || 'Next',
      onPageClick: opts.onPageClick,
      prevText: opts.prevText || 'Prev',
      value: opts.currentPage || 1
    });
  }

  pageChange(pageNumber, event) {
    this.set(pageNumber);
    if (this.onPageClick) {
      event.stopPropagation();
      event.preventDefault();
      this.onPageClick(pageNumber, event);
    }
  }

  render() {
    this.$el.pagination({
      currentPage: this.get(),
      cssStyle: this.cssStyle,
      edges: this.edges,
      hrefTextPrefix: this.hrefTextPrefix,
      nextText: this.nextText,
      onPageClick: this.pageChange.bind(this),
      prevText: this.prevText,
      items: this.items,
      itemsOnPage: this.itemsOnPage
    });
    return this.$el.html();
  }
}

module.exports = Pagination;
