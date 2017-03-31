var func2 = require('./func2');

var func1 = function() {
  console.log('func2 on func1:', func2);
  func2();
};

module.exports = func1;
