import Asserter from '../Asserter';

let null_ = value => {
  let result = value === null;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(value + ' is null');
  } else if (!result) {
    this.setMessage(value + ' is not null');
  }
};

Asserter.prototype.null = null_;

export default null_;