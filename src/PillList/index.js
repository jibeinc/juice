require('./styles.scss');
const pillListTmpl = require('./pillList.dot');
const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

/**
 * Class for creating a Pill component
 */
class PillList extends BaseComponent {
  /**
   * Create a pill
   * @param {string} el - The selector for the element to put the pills in
   * @param {object} opts - The options for the component
   * @param {*[]} [opts.results] - Prefill the component with data
   */
  constructor(el, opts = {}) {
    super(el, opts);
    Object.assign(this, {
      value: opts.results || []
    });
  }

  /**
   * Render the html for the component and apply event listeners
   * @returns {string} The html for the component
   */
  render() {
    this.$el.html(pillListTmpl(this));

    const $pillList = this.$el.find('ul.ui-pill-list');
    // Add attrs to the list

    $pillList.attr(this.attrs || {});

    const $pills = this.$el.find('li.ui-pill');
    if ($pills[0]) {
      $pills.find('.delete-icon').on('click', (evt) => {
        const $currentTarget = $(evt.currentTarget).parent();
        if ($currentTarget[0]) {
          this.get().splice($currentTarget.attr('data-index'), 1);
          this.set(this.get());
        }
      });
    }
    return this.$el.html();
  }

  /**
   * Expected to be overridden
   * @param {*} item The item to render
   * @returns {string} The string representation of the item
   */
  renderItem(item) {
    return item.toString();
  }
}

module.exports = PillList;