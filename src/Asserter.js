"use strict";

export default class Asserter {
  constructor(desc, fn, isNo = false) {
    this.desc = desc;
    this.fn = fn;
    this.isNo = isNo;

    this.result = null;
    this.message = '';
    this.error = null;

    if (!isNo) {
      this.no = new Asserter(desc, fn, true);
    }
  }

  setResult(result) {
    let getResult = r => {
      return this.isNo ? !r : r;
    };
    
    if (this.result === null) {
      this.result = getResult(result);
    } else {
      this.result = this.result && getResult(result);
    }
  }

  setMessage(message) {
    if (this.message === null) {
      this.message = message;
    } else {
      this.message += message;
    }
  }

  toString() {
    return this.desc + ' : ' + this.result;
  }
}