import Asserter from '../Asserter';

let truthy = value => {
  let result = !!value;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(value + ' is truthy');
  } else if (!result) {
    this.setMessage(value + ' is not truthy');
  }
};

Asserter.prototype.truthy = truthy;

export default truthy;