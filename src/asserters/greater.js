import Asserter from '../Asserter';

let greater = (a, b) => {
  let result = a > b;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(a + ' is greater than ' + b);
  } else if (!result) {
    this.setMessage(a + ' is not greater than ' + b);
  }
};

Asserter.prototype.greater = greater;

export default greater;