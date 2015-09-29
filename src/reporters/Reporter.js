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
      test.error && this.fail(this.getError(test.error));
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
      asserter.error && this.showError(asserter.error);
    }
    this._indentCount--;
  }

  showError(error) {
    this._indentCount++;
    //this.fail(ExceptionHelper.getMessage(error));
    this.fail(this.formatErrorStack(ExceptionHelper.getStack(error)));
    this._indentCount--;
  }

  formatErrorStack(stack) { return stack; }
  clear() { }
  log(log) { }
  info(log) { }
  fail(log) { }
  success(log) { }
  indents() { }
}