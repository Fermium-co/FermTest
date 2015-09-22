import Asserter from '../Asserter';

let nan = (a) => {
  this.result = a !== a;
  if (!this.result) {
    this.message = a + ' is not NaN';
  }
};

Asserter.prototype.nan = nan;

export default nan;