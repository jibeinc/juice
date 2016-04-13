'use strict';

// listItemOpts has the following properties:
//  @param {Boolean} stopPropagation - prevents the click handler from bubbling the event upwards
//  @param {Object} attrs - a list of CSS attributes to put on each ListItem
const listViewTmpl = require('./listView.dot');
const $ = require('jquery');
const BaseComponent = require('../BaseComponent');
const Utils = require('../Utils');

/**
 * Render a list of results
 * - publishes an event when a list item is clicked 'selected'
 */
class ListView extends BaseComponent {
  /**
   * Creates a new ListView component
   * @param {string} el - The selector for the element to put the ListView in
   * @param {object} opts - The options for the component
   * @param {function} [opts.fetch] - A function to pull new data
   * @param {object} [opts.listItemOpts] - An object containing options specifically for each item in listView
   * @param {object} [opts.listItemOpts.attrs] - a list of CSS attributes to put on each ListItem
   * @param {boolean} [opts.listItemOpts.stopPropogation] - prevents the click handler from bubbling the event upwards
   * @param {function} [opts.renderItem] - Determines how each listElement will be displayed in DOM
   * @param {*[]} [opts.results] - Prefill the component with data
   */
  constructor(el, opts = {}) {
    super(el, opts);

    Object.assign(this, {
      fetch: opts.fetch || $.noop,
      listItemOpts: opts.listItemOpts || {},
      renderItem: opts.renderItem || this.renderItem,
      results: opts.results || []
    });
  }

  /**
   * Render the html for the component and apply event listeners
   * @returns {string} The html for the component
   */
  render() {
    this.$el.html(listViewTmpl(this));

    this.$el.find('ul.ui-list').attr(this.attrs);
    this.$el.find('li.ui-list-item').attr(this.listItemOpts.attrs || {});
    Utils.bindClick(this.$el.find('li.ui-list-item'), (evt) => {
      this.set(this.results[$(evt.currentTarget).attr('data-index')]);

      if (this.listItemOpts.stopPropagation) {
        evt.stopPropagation();
      }
    });
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

  /**
   * Fetch new results and render the list again
   * @returns {*} The new list
   */
  refresh() {
    this.publish('refresh');
    return this.fetch((results) => {
      this.results = results;
      this.render();
    });
  }
}

module.exports = ListView;
