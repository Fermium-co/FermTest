import Asserter from '../Asserter';
import utils from '../utils';

let equal = (a, b) => {
  let result = utils.equals(a, b);
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(a + ' is equalt to ' + b);
  } else if (!result) {
    this.setMessage(a + ' is not equalt to ' + b);
  }
};

Asserter.prototype.equal = equal;

export default equal;