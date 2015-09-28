import Asserter from '../Asserter';

let falsy = value => {
  let result = !!!value;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(value + ' is falsy');
  } else if (!result) {
    this.setMessage(value + ' is not falsy');
  }
};

Asserter.prototype.falsy = falsy;

export default falsy;