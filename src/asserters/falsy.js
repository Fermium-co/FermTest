import Asserter from '../Asserter';

let falsy = (a) => {
  this.result = !!!a;
  if (!this.result) {
    this.message = a + ' is not falsy';
  }
};

Asserter.prototype.falsy = falsy;

export default falsy;