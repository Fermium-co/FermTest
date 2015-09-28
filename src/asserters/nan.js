import Asserter from '../Asserter';

let nan = value => {
  let result = value !== value;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(value + ' is NaN');
  } else if (!result) {
    this.setMessage(value + ' is not NaN');
  }
};

Asserter.prototype.nan = nan;

export default nan;