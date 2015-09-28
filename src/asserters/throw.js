import Asserter from '../Asserter';
import utils from '../utils';

let throw_ = function (fn, error) {
  let isThrew = false;
  let thrownError = undefined;

  let result = false;
  let message = '';

  if (!utils.isFunc(fn)) {
    throw new Error('first parameter must be a function');
  }

  try {
    fn();
  } catch (e) {
    isThrew = true;
    thrownError = e;
  }

  if (isThrew && this.isNo) {
    message = 'The function did throw';
  } else if (!isThrew && !this.isNo) {
    message = 'The function did not throw';
  } else if (arguments.length == 1) {
    result = true;
  } else if (utils.equals(error, thrownError)) {
    if (this.isNo) {
      message = 'The function thrown ' + error;
    } else {
      result = true;
    }
  } else {
    if (this.isNo) {
      result = true;
    } else {
      message = 'The function thrown ' + thrownError + ' not ' + error;
    }
  }

  this.setResult(result);
  this.setMessage(message);

};

Asserter.prototype.throw = throw_;

export default throw_;