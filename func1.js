import func2 from './func2'

var func1 = function() {
  console.log('func2 on func1:', func2);
  func2();
};

export default func1;