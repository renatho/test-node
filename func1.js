var func2 = require('./func2');

module.exports = function() {
  console.log('func2 on func1:', func2);
  func2();
};