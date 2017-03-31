var func2 = require('./func2');

var func3 = function() {
  console.log('func2 on func3: ', func2);
};

module.exports = func3;
