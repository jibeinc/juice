'use strict';

const Pagination = require('./index.js');

describe('pagination functionality', () => {
  let pagination;
  const liSelector = '.pagination-test.pagination li';
  let testOnPageClickCalled = false;

  beforeEach(() => {
    $('body').append('<div class="pagination-test"></div>');
    pagination = new Pagination('.pagination-test', {
      cssStyle: 'pagination',
      edges: 0,
      hrefTextPrefix: '#?page=',
      itemsOnPage: 10,
      nextText: '<span class="icon icon-arrow_forward icon-arrow"></span>',
      onPageClick() {
        testOnPageClickCalled = true;
      },
      prevText: '<span class="icon icon-arrow_back icon-arrow"></span>'
    });
    pagination.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test onPageClick is called', () => {
    expect(testOnPageClickCalled).toBe(false);
    $($(liSelector)[2]).find('a').trigger('click');
    expect(testOnPageClickCalled).toBe(true);
  });

  it('test next/previous', () => {
    $($(liSelector)[6]).find('a').trigger('click');
    expect(pagination.get()).toBe(2);
    $($(liSelector)[0]).find('a').trigger('click');
    expect(pagination.get()).toBe(1);
  });
  it('test clicking page number', () => {
    $('body').append('<div class="pagination-test"></div>');
    pagination = new Pagination('.pagination-test', {
      cssStyle: 'pagination',
      edges: 0,
      hrefTextPrefix: '#?page=',
      itemsOnPage: 10,
      nextText: '<span class="icon icon-arrow_forward icon-arrow"></span>',
      prevText: '<span class="icon icon-arrow_back icon-arrow"></span>'
    });
    pagination.render();

    expect(pagination.get()).toBe(1);
    $($(liSelector)[4]).find('a').trigger('click');
    expect(pagination.get()).toBe(4);
  });
});
