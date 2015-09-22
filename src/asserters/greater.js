import Asserter from '../Asserter';

let greater = (a, b) => {
  this.result = a > b;
  if (!this.result) {
    this.message = a + ' is not greater than ' + b;
  }
};

Asserter.prototype.greater = greater;

export default greater;