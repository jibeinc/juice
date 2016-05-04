const ListView = require('../src/ListView/index.js');

describe('listItem functionality', () => {
  let listView;

  beforeEach(() => {
    $('body').append('<div class="search-results-list"></div>');

    listView = new ListView('.search-results-list', {
      attrs: {
        class: 'container job-search-results',
        itemtype: 'http://schema.org/ItemList'
      },
      results: [1, 2, 3, 4, 5],
      fetch: (cb) => {
        const results = [];
        cb(results);
      },

      listItemOpts: {
        attrs: {
          class: 'job-result',
          itemprop: 'itemListElement',
          itemtype: 'http://schema.org/JobPosting'
        }
      }
    });

    listView.subscribe((selection) => {
      console.log('list item selected', selection);
    });

    listView.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test listItemOpts', () => {
    const $listItems = listView.$el.find('li');
    expect($listItems).toHaveClass('job-result');
    expect($listItems).toHaveAttr('itemprop', 'itemListElement');
    expect($listItems).toHaveAttr('itemtype', 'http://schema.org/JobPosting');
  });
});
