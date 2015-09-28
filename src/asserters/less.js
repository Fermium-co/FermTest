import Asserter from '../Asserter';

let less = (a, b) => {
  let result = a < b;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(a + ' is less than ' + b);
  } else if (!result) {
    this.setMessage(a + ' is not less than ' + b);
  }
};

Asserter.prototype.less = less;

export default less;