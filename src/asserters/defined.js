import Asserter from '../Asserter';

let defined = value => {
  let undefined = void 0;
  //let undefined = (arg => arg)(); 
  let result = undefined !== value;
  this.setResult(result);
  if (this.isNo && result) {
    this.setMessage(value + ' is defined');
  } else if (!result) {
    this.setMessage(value + ' is not defined');
  }
};

Asserter.prototype.defined = defined;

export default defined;