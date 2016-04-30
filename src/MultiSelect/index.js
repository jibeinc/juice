require('./styles.scss');
const multiSelectTmpl = require('./multiSelect.dot');
const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

/**
 * Class representing a MultiSelect component
 */
class MultiSelect extends BaseComponent {
  /**
   * Creates a new MultiSelect component
   * @param {string} el - The selector for the element to put the MultiSelect in
   * @param {object} opts - The options for the component
   * @param {string} [opts.displayNameKey] - A string indicating the index of the displayName property
   * @param {function} [opts.renderItem] - A function to render each item
   */
  constructor(el, opts = {}) {
    super(el);
    this.displayNameKey = opts.displayNameKey || 'displayName';
    this.renderItem = opts.renderItem || this.renderItem;
    this.setOptions(opts.options || []);
  }

  /**
   * Get the currently selected options
   * @returns {object[]} The array of selected items
   */
  get() {
    this.options = this.options || [];
    return this.options.filter((opt) => {
      return opt.checked
    });
  }

  /**
   * Render the html for the component and apply event listeners
   * @returns {string} The html for the component
   */
  render() {
    this.$el.html(multiSelectTmpl(this));

    Utils.bindClick(this.$el.find('.ms-label'), (evt) => {
      evt.stopPropagation();
      this.set($(evt.target).parent().find('input').val());
    });

    return this.$el.html();
  }

  /**
   * Grab the item and return its string representation
   * @param {object} item The item to render
   * @returns {string} The item stringified
   */
  renderItem(item) {
    return JSON.stringify(item[this.displayNameKey]);
  }

  /**
   * Set the possible options for the MultiSelect
   * @param {object[]|string[]} options An array of options to populate the MultiSelect
   */
  setOptions(options) {
    const selections = this.get().map((s) => s.value);

    this.options = options.map((opt) => {
      if (typeof opt !== 'object') {
        opt = {
          value: opt
        };
      }
      opt.checked = selections.indexOf(opt.value) !== -1;
      return opt;
    });
  }

  /**
   * Check the options that are in the array passed
   * @param {*[]|*} selected - An array of selected values or a value to select
   * @returns {MultiSelect} An instance of MultiSelect
   */
  set(selected) {
    if (Array.isArray(selected)) {
      this.options.forEach((option) => {
        option.checked = selected.indexOf(option.value) === -1 ? false : true;
      });
    } else {
      this.options.forEach((option) => {
        option.checked = option.value === selected ? !option.checked : option.checked;
      });
    }

    this.render();

    this.publish(this.get());

    return this;
  }
}

module.exports = MultiSelect;
