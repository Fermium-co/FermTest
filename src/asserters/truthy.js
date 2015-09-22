import Asserter from '../Asserter';

let truthy = (a) => {
  this.result = !!a;
  if (!this.result) {
    this.message = a + ' is not truthy';
  }
};

Asserter.prototype.truthy = truthy;

export default truthy;