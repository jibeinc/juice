/* eslint-disable max-nested-callbacks */

const ExpandCollapse = require('../src/ExpandCollapse/index.js');

describe('expandCollapse', () => {
  let expandCollapse;

  beforeEach(() => {
    $('body').append('<span class="toggle">Toggle</span>');
    $('body').append(`<div class="expand-collapse-test-container">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut porttitor eros. In nec nulla quam. Nullam at vulputate
    ipsum. Curabitur elementum lectus sit amet orci placerat ultrices. Phasellus ipsum tellus, facilisis rhoncus maximus
    sit amet, sollicitudin quis felis. Morbi a ipsum congue neque hendrerit mollis a ac turpis. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor metus sed nulla aliquet, in sagittis tellus
    sodales. Etiam nec neque eu enim consectetur vehicula.
    </p>

    <p>
    Nulla volutpat ante ut odio posuere dapibus. Nunc justo lacus, accumsan a lobortis eget, commodo sit amet ante. Donec mattis
    mauris eget eros luctus iaculis. Aenean vel aliquam nisi. Morbi fringilla imperdiet ultrices. Cras eget sem eleifend,
      blandit enim tempor, convallis augue. Phasellus id sagittis purus, a accumsan velit.
    </p>
    </div>`);

    expandCollapse = new ExpandCollapse('.expand-collapse-test-container', '.toggle', {
      toggledClass: 'i-am-toggled',
      untoggledClass: 'i-am-NOT-toggled'
    });

    expandCollapse.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initially collapsed and hidden', () => {
    expect(expandCollapse.$el.height()).toBe(0);
  });

  it('test expand/collapse', (done) => {
    expect(expandCollapse.$el.height()).toBe(0);
    $('.toggle').trigger('click');
    setTimeout(() => {
      expect(expandCollapse.$el.height()).toBeGreaterThan(0);
      $('.toggle').trigger('click');
      setTimeout(() => {
        expect(expandCollapse.$el.height()).toBeLessThan(1);
        done();
      }, 500);
    }, 500);
  });

  it('throw error when no toggleSelector', () => {
    expect(() => {
      return new ExpandCollapse('.expand-collapse-test-container');
    })
      .toThrow(new Error('You must provide a toggleSelector'));
  });
});
