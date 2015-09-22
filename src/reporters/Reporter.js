export default class Reporter {
  constructor(tests) {
    this.tests = tests;
    this._indentCount = 0;
  }

  report() {
    this.clear();
    this.reportTests(this.tests);
  }

  reportTests(tests) {
    tests.forEach(t => {
      this.showTestResults(t);
      if (t.childTests.length > 0) {
        this._indentCount++;
        this.reportTests(t.childTests);
        this._indentCount--;
      }
      if (this._indentCount == 0) {
        this.log(new Array(100).join('='));
      }
    });
  }

  showTestResults(test) {
    this.info(test.desc);
    if (test.result) {
      test.asserters.forEach(a => this.showAsserterResult(a));
    } else {
      this.fail(test.error);
    }
  }

  showAsserterResult(asserter) {
    this._indentCount++;
    if (asserter.result) {
      this.success(asserter.desc);
    } else {
      this.fail(asserter.message || asserter.desc);
      asserter.error && this.fail(asserter.error);
    }
    this._indentCount--;
  }

  clear() { }
  log(log) { }
  info(log) { }
  fail(log) { }
  success(log) { }
  indents() { }
}