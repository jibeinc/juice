/* const $ = require('jquery');
const InfiniteScroll = require('./index.js');

describe('infiniteScroll', () => {
  let infiniteScroll;

  beforeEach(() => {
    $('body').append('<div style="background-color: cadetblue; height: 400px;"></div>');
    $('body').append('<div style="height: 1000px;" class="infinite-scroll-test"></div>');
    $('body').append('<div style="background-color: cadetblue; height: 1000px;"></div>');

    infiniteScroll = new InfiniteScroll('.infinite-scroll-test', () => {
      console.log('scrolled to bottom')
    }, {
      debounceWait: 250,
      scrollTrigger: 0.65,
      windowScroll: true
    });

    infiniteScroll.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test scroll calls onScrollToBottom - windowScroll:true', (done) => {
    spyOn(infiniteScroll, 'onScrollToBottom');
    $(window).scrollTop(1500);
    setTimeout(()=> {
      //expect(infiniteScroll.onScrollToBottom).toHaveBeenCalled();
      done();
    }, 500)

  });
});*/
