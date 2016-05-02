/* eslint-disable lines-around-comment */

const ListView = require('../src/ListView/index.js');
const InfiniteScroll = require('../src/InfiniteScroll/index.js');

describe('infiniteScroll window', () => {
  let infiniteScroll;

  beforeEach(() => {
    $('body').append('<div style="background-color: cadetblue; height: 400px;"></div>');
    $('body').append('<div style="height: 1000px;" class="infinite-scroll-test"></div>');
    $('body').append('<div style="background-color: cadetblue; height: 1000px;"></div>');

    infiniteScroll = new InfiniteScroll('.infinite-scroll-test', () => {
      console.log('scrolled to bottom');
    }, {
      debounceWait: 250,
      scrollTrigger: 0.80,
      windowScroll: true
    });

    infiniteScroll.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test scroll calls onScrollToBottom - windowScroll:true', (done) => {
    spyOn(infiniteScroll, 'onScrollToBottom');
    window.scrollTo(0, 1500);
    setTimeout(() => {
      expect(infiniteScroll.onScrollToBottom).toHaveBeenCalled();
      done();
    }, 500);
  });
  it('throw error when no onScrollToBottom', () => {
    expect(() => {
      return new InfiniteScroll('.infinite-scroll-test');
    })
      .toThrow(new Error('You must provide an onScrollToBottom function'));
  });
});

describe('infiniteScroll div', () => {
  let infiniteScroll;

  beforeEach(() => {
    $('body').append(`<div style="background-color: cadetblue; height: 400px;"></div>
              <div class="infinite-scroll-test" style="height:200px;overflow:scroll;">
              <div class="container">
              <div class="row">
              <div class="search-results"></div>
              </div>
              </div>
              </div>
      <div style="background-color: cadetblue; height: 400px;"></div>`);

    let results = [];
    const loremArray = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis massa in ex iaculis fermentum. Maecenas tempor ' +
      'nisl ante, vel varius lectus aliquet elementum.Etiam sit amet porta nunc, vitae tincidunt nibh.Phasellus sit amet ' +
      'iaculis enim.Proin sit amet vehicula justo.Aliquam non faucibus lorem.Fusce et placerat nulla.',

      'Aenean blandit, lectus ut rhoncus porttitor, massa arcu vulputate risus, sed commodo tellus nulla et tortor. Nam ' +
      'aliquet vestibulum semper. Vestibulum rutrum felis convallis porta imperdiet. Pellentesque molestie elementum ' +
      'turpis, sit amet malesuada diam maximus eu. Mauris aliquet hendrerit augue eu sollicitudin. Aenean nisl ipsum, ' +
      'cursus sed ante quis, imperdiet cursus nulla. Curabitur pellentesque eros ex, sed dignissim nisi iaculis ac.',

      'Nunc in placerat neque. Donec vel lobortis diam. Aenean nec tellus sit amet elit fermentum cursus. Fusce tempor non ' +
      'nunc et iaculis. Nulla facilisi. Vestibulum ut orci eu dui ornare malesuada. Nullam eu volutpat enim. Duis elementum ' +
      'velit tristique, pulvinar est in, tempus metus. Nullam bibendum felis sit amet sem euismod tempus. Duis lacinia sed ' +
      'lectus quis condimentum. Donec in lobortis nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ' +
      'posuere cubilia Curae; Aliquam eleifend felis id lacus lacinia, at pellentesque mauris vehicula.',

      'Nullam nec dignissim dui. Pellentesque lobortis pharetra libero sed ultrices. Vivamus ut interdum ex. Donec odio ' +
      'felis, imperdiet sit amet interdum eget, eleifend vel dolor. Ut lobortis rhoncus vehicula. Curabitur in commodo ' +
      'massa. Ut mauris lectus, gravida at felis eget, pretium porttitor tellus. Pellentesque placerat elementum mauris, ' +
      'quis faucibus arcu interdum id. Morbi sodales eget dui eu bibendum. In tincidunt scelerisque gravida. Nam pretium ' +
      'nulla turpis, non lobortis dolor euismod eu. Nam leo libero, pharetra eu odio at, molestie vestibulum erat. Donec at ' +
      'tempus lacus. Phasellus sed nibh porttitor, blandit nisl interdum, tincidunt risus. Vestibulum tempus tempus dui, a ' +
      'porttitor ex maximus sed. Nulla facilisis consectetur urna ut posuere.',

      'Nam rutrum pellentesque erat, vel porta lorem maximus eu. Ut nec tortor at quam interdum tincidunt eget vel nisi. ' +
      'Etiam aliquet neque id odio ultricies accumsan a quis orci. Curabitur ut mauris massa. Curabitur at nisi malesuada, ' +
      'mattis felis sit amet, bibendum mi. Suspendisse dapibus ornare malesuada. Lorem ipsum dolor sit amet, consectetur ' +
      'adipiscing elit. Nulla facilisi. Nunc nec ex in elit euismod facilisis. Integer maximus, orci id efficitur blandit, ' +
      'massa mi pharetra urna, nec euismod urna enim ut ligula. Quisque sit amet tellus eros. Etiam eleifend odio lacus, et ' +
      'imperdiet augue lobortis non.'
    ];

    // Add initial results
    results = results.concat(loremArray);

    /* istanbul ignore next */
    const list = new ListView('.search-results', {
      /* istanbul ignore next */
      fetch(cb) {
        /* istanbul ignore next */
        results = results.concat(loremArray);
        /* istanbul ignore next */
        cb(results);
      },
      results
    });

    list.render();

    infiniteScroll = new InfiniteScroll('.infinite-scroll-test', list.refresh.bind(list), {
      debounceWait: 250,
      scrollTrigger: 0.80,
      windowScroll: false
    });

    infiniteScroll.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test scroll calls onScrollToBottom - windowScroll:false', (done) => {
    spyOn(infiniteScroll, 'onScrollToBottom');
    $('.infinite-scroll-test')[0].scrollTop = 500;
    setTimeout(() => {
      expect(infiniteScroll.onScrollToBottom).toHaveBeenCalled();
      done();
    }, 500);
  });
});
