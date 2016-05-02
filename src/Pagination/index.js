const BaseComponent = require('../BaseComponent');

/**
 * Class for creating a Pagination component
 * @author Robbie Wagner
 */
class Pagination extends BaseComponent {
  /**
   * Create a new Pagination component
   * @param {string} el - The selector for the element to put the Pagination component in
   * @param {object} opts - The options for the component
   * @param {number} [opts.currentPage] - The page we are currently on
   * @param {number} [opts.edges] - How many page numbers are visible at the beginning and ending of pagination
   * @param {string} [opts.hrefTextPrefix] - A string to prefix to the front of all hrefs
   * @param {number} [opts.items] - The total number of items in the list
   * @param {number} [opts.itemsOnPage] - The number of items to display per page
   * @param {string} [opts.nextText] - The text to display in the next button
   * @param {function} [opts.onPageClick] - A function to call when the page is changed
   * @param {string} [opts.prevText] - The text to display in the previous button
   */
  constructor(el, opts = {}) {
    super(el);

    Object.assign(this, {
      cssStyle: opts.cssStyle || 'pagination',
      edges: opts.edges || 0,
      hrefTextPrefix: opts.hrefTextPrefix || '#page-',
      items: opts.items || 100,
      itemsOnPage: opts.itemsOnPage || 10,
      nextText: opts.nextText || 'Next',
      onPageClick: opts.onPageClick,
      prevText: opts.prevText || 'Prev',
      value: opts.currentPage || 1
    });
  }

  /**
   * Sets the value of the Pagination component to the given page number, and calls onPageClick, if it is defined
   * @param {number} pageNumber - The page number transitioned to
   * @param {event} event - The event fired
   */
  pageChange(pageNumber, event) {
    this.set(pageNumber);
    if ($.isFunction(this.onPageClick)) {
      event.stopPropagation();
      event.preventDefault();
      this.onPageClick(pageNumber, event);
    }
  }

  /**
   * Initializes a simplePagination instance, and returns the html for the Pagination component
   * @returns {string} The html to render for the Pagination component
   */
  render() {
    this.$el.pagination({
      currentPage: this.get(),
      cssStyle: this.cssStyle,
      edges: this.edges,
      hrefTextPrefix: this.hrefTextPrefix,
      nextText: this.nextText,
      onPageClick: this.pageChange.bind(this),
      prevText: this.prevText,
      items: this.items,
      itemsOnPage: this.itemsOnPage
    });
    return this.$el.html();
  }
}

module.exports = Pagination;
