import func1 from './func1';
import func3 from './func3';

var func2 = function() {
  console.log('func1 on func2: ', func1);
  console.log('func3 on func2: ', func3);
  func3();
};

export default func2;