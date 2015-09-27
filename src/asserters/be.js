import Asserter from '../Asserter';

let be = function (a, b) {
  let result = a === b;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(a + ' is ' + b);
  } else if (!result) {
    this.setMessage(a + ' is not ' + b);
  }
};

Asserter.prototype.be = be;

export default be;