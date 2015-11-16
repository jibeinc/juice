module.exports = (condition) => {
  if (!condition) {
    throw new Error('Assertion failure')
  }
};
