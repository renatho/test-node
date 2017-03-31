var func2 = require('./func2');

var func1 = function() {
  func2();
};

module.exports = func1;
