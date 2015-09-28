import Asserter from '../Asserter';

let undefined_ = value => {
  let undefined = void 0;
  // or like this:   let undefined = ((arg) => arg)(); 
  let result = undefined === value;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(value + ' is not undefined');
  } else if (!result) {
    this.setMessage(value + ' is not undefined');
  }
};

Asserter.prototype.undefined = undefined_;

export default undefined_;