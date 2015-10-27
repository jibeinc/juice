var $ = require('jQuery');

function TextInput(el) {
  this.$el = $(el);
};

TextInput.prototype.render = () => {
  $el.html('<input type="text" />');
};

module.exports = TextInput;
