"use strict";

import Asserter from './Asserter'

export default class Test {
  constructor(desc, fn) {
    this.desc = desc;
    this.fn = fn;
    this.asserters = [];
    this.childTests = [];

    this.result = null;
    this.error = null;
  }

  addChild(test) {
    this.childTests.push(test);
  }

  run() {
    try {
      this.fn.call(this, this.getAsserterGenerator());
      this.result = true;
    } catch (e) {
      this.result = false;
      this.Error = e;
    }
    this.childTests.forEach(t => t.run());
  }

  getAsserterGenerator() {
    let asserterFn = (desc, fn) => {
      let asserter = new Asserter(desc, fn);
      this.asserters.push(asserter);
      if (fn && typeof fn === 'function') {
        try {
          fn.call(this, asserter);
        } catch (e) {
          asserter.result = false;
          asserter.error = e;
        }
      }
      return asserter;
    };
    asserterFn.test = (desc, fn) => {
      this.addChild(new Test(desc, fn));
    };
    return asserterFn;
  }
}