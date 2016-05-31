const PillList = require('../src/PillList/index.js');

describe('pillList functionality', () => {
  let pillList;

  beforeEach(() => {
    $('body').append('<div class="pills-container"></div>');

    pillList = new PillList('.pills-container', {
      results: ['test', 'test-1', 'test-2']
    });

    pillList.subscribe((pills) => {
      console.log('pill list changed', pills);
    });

    pillList.render();
  });

  afterEach(() => {
    $('body').empty();
  });

  it('test initial pills rendered', () => {
    const $pills = pillList.$el.find('li');
    expect($pills).toHaveClass('ui-pill');
    expect(pillList.get().length).toBe(3);
  });

  it('test deleting pill', () => {
    const $pills = pillList.$el.find('li');
    $pills.find('.delete-icon').first().trigger('click');
    expect(pillList.get().length).toBe(2);
  });

  it('test adding a pill', () => {
    pillList.set('new-pill-yo');
    expect(pillList.get().length).toBe(4);
    expect(pillList.get()[3]).toBe('new-pill-yo');
  });

  it('test replacing all pills and deleting', () => {
    pillList.set(['new-pill-yo', 'what-up']);
    expect(pillList.get().length).toBe(2);
    expect(pillList.get()[0]).toBe('new-pill-yo');
    expect(pillList.get()[1]).toBe('what-up');
    const $pills = pillList.$el.find('li');
    $pills.find('.delete-icon').last().trigger('click');
    expect(pillList.get().length).toBe(1);
    expect(pillList.get()[0]).toBe('new-pill-yo');
  });
});
