import Asserter from '../Asserter';

let be = function (a, b) {
  this.result = a === b;
  if (!this.result) {
    this.message = a + ' is not ' + b;
  }
}

Asserter.prototype.be = be;

export default be;