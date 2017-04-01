var func1 = require('./func1');
var func3 = require('./func3');

module.exports = function() {
  console.log('func1 on func2: ', func1);
  console.log('func3 on func2: ', func3);
  func3();
};