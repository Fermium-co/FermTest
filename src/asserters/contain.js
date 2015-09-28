import Asserter from '../Asserter';
import utils from '../utils';

let contain = (a, b) => {
  let result = utils.contains(a, b);
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(a + ' contains ' + b);
  } else if (!result) {
    this.setMessage(a + ' does not contain ' + b);
  }
};

Asserter.prototype.contain = contain;

export default contain;