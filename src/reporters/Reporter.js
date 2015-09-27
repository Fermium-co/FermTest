import ExceptionHelper from './ExceptionHelper';

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
      test.error && this.fail(ExceptionHelper.getMessage(test.error));
    }
  }

  showAsserterResult(asserter) {
    this._indentCount++;
    if (asserter.result) {
      this.success(asserter.desc);
    } else if (asserter.result === null) {
      if (asserter.no.result !== null) {
        this._indentCount--;
        this.showAsserterResult(asserter.no);
        this._indentCount++;
      } else {
        this.info('assert has no result!');
      }
    } else {
      this.fail(asserter.desc);
      asserter.message && this.fail(asserter.message);
      asserter.error && this.fail(ExceptionHelper.getMessage(asserter.error));
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