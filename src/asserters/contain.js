import Asserter from '../Asserter';
import utils from '../utils';

let contain = (a, b) => {
  this.result = utils.contains(a, b);
  if (!this.result) {
    this.message = a + ' does not contain ' + b;
  }
};

Asserter.prototype.contain = contain;

export default contain;