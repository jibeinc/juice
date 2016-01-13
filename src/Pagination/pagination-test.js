const $ = require('jquery');
const expect = require('expect');
const Pagination = require('./index.js');

describe('pagination initialize', () => {
  it('test onPageClick is called', () => {
    $('body').append('<div class="pagination-test"></div>');
    let testOnPageClickCalled = false;
    const pagination = new Pagination('.pagination-test', {
      cssStyle: 'pagination',
      edges: 0,
      hrefTextPrefix: '#?page=',
      itemsOnPage: 10,
      nextText: '<span class="icon icon-arrow_forward icon-arrow"></span>',
      onPageClick(pageNumber, event) {
        testOnPageClickCalled = true;
      },
      prevText: '<span class="icon icon-arrow_back icon-arrow"></span>'
    });
    pagination.render();

    expect(testOnPageClickCalled).toBe(false);
    $($('.pagination-test.pagination li')[2]).find('a').click();
    expect(testOnPageClickCalled).toBe(true);
  });
});

describe('pagination navigation', () => {
  it('test next/previous', () => {
    $('body').append('<div class="pagination-test"></div>');
    const pagination = new Pagination('.pagination-test', {
      cssStyle: 'pagination',
      edges: 0,
      hrefTextPrefix: '#?page=',
      itemsOnPage: 10,
      nextText: '<span class="icon icon-arrow_forward icon-arrow"></span>',
      prevText: '<span class="icon icon-arrow_back icon-arrow"></span>'
    });
    pagination.render();

    $($('.pagination-test.pagination li')[6]).find('a').click();
    expect(pagination.get()).toBe(2);
    $($('.pagination-test.pagination li')[0]).find('a').click();
    expect(pagination.get()).toBe(1);
  });
  it('test clicking page number', () => {
    $('body').append('<div class="pagination-test"></div>');
    const pagination = new Pagination('.pagination-test', {
      cssStyle: 'pagination',
      edges: 0,
      hrefTextPrefix: '#?page=',
      itemsOnPage: 10,
      nextText: '<span class="icon icon-arrow_forward icon-arrow"></span>',
      prevText: '<span class="icon icon-arrow_back icon-arrow"></span>'
    });
    pagination.render();

    expect(pagination.get()).toBe(1);
    $($('.pagination-test.pagination li')[4]).find('a').click();
    expect(pagination.get()).toBe(4);
  });
});
