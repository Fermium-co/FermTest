import Asserter from '../Asserter';

let less = (a, b) => {
  this.result = a < b;
  if (!this.result) {
    this.message = a + ' is not less than ' + b;
  }
};

Asserter.prototype.less = less;

export default less;