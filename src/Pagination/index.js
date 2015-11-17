'use strict';

const BaseComponent = require('../BaseComponent');
const pagination = require('pagination');
const paginationTmpl = require('./pagination.dot');

class Pagination extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);
    this.boostrapPaginator = new pagination.TemplatePaginator({
      current: opts.current,
      prelink: opts.prelink,
      rowsPerPage: opts.rowsPerPage,
      slashSeparator: opts.slashSeparator,
      totalResult: opts.totalResult,
      template(result) {
        this.result = result;
        return paginationTmpl(this);
      }
    });
  }

  render() {
    this.$el.html(this.boostrapPaginator.render());
    return this.$el.html();
  }
}

module.exports = Pagination;