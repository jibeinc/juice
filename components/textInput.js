var $ = require('jQuery');

function TextInput(el) {
  this.$el = $(el);
};

TextInput.prototype.render = function() {
  $el.html('<input type="text" />');
};

module.export = TextInput;
