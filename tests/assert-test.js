const assert = require('../src/assert.js');

describe('Assert function', () => {
  it('should throw error when condition isn\'t met', () => {
    expect(() => {
      assert(typeof 3 === 'string');
    }).toThrow(new Error('Assertion failure'));
  });

  it('should throw error with specific message', () => {
    expect(() => {
      assert(typeof 3 === 'string', 'custom error message');
    }).toThrow(new Error('custom error message'));
  });

  it('should do nothing when condition is met', () => {
    expect(() => {
      assert(typeof 3 === 'number');
    }).not.toThrow();
  });
});
