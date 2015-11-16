'use strict';

const BaseComponent = require('../BaseComponent');
const pagination = require('pagination');

class Pagination extends BaseComponent {
  constructor(el, opts = {}) {
    super(el);
    this.boostrapPaginator = new pagination.TemplatePaginator({
      current: opts.current,
      prelink: opts.prelink,
      rowsPerPage: opts.rowsPerPage,
      slashSeparator: opts.slashSeparator,
      totalResult: opts.totalResult,
      template: function (result) {
        var i, len, prelink;
        var html = '<div><ul class="pagination">';
        if (result.pageCount < 2) {
          html += '</ul></div>';
          return html;
        }
        prelink = this.preparePreLink(result.prelink);
        if (result.previous) {
          html += '<li><a href="' + prelink + result.previous + '">' + this.options.translator('PREVIOUS') + '</a></li>';
        }
        if (result.range.length) {
          for (i = 0, len = result.range.length; i < len; i++) {
            if (result.range[i] === result.current) {
              html += '<li class="active"><a href="' + prelink + result.range[i] + '">' + result.range[i] + '</a></li>';
            } else {
              html += '<li><a href="' + prelink + result.range[i] + '">' + result.range[i] + '</a></li>';
            }
          }
        }
        if (result.next) {
          html += '<li><a href="' + prelink + result.next + '" class="paginator-next">' + this.options.translator('NEXT') + '</a></li>';
        }
        html += '</ul></div>';
        return html;
      }
    });
  }

  render() {
    this.$el.html(this.boostrapPaginator.render());
    return this.$el.html();
  }
}

module.exports = Pagination;