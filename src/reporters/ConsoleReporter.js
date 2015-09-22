import Reporter from './Reporter';

export default class ConsoleReporter extends Reporter {
  constructor(tests) {
    super(tests);
  }

  clear() {
    console.clear();
  }

  log(log) {
    console.log(this.indents() + log);
  }

  info(log) {
    console.info(this.indents() + log);
  }

  fail(log) {
    console.log('%c' + this.indents() + log, 'color:red');
  }

  success(log) {
    console.log('%c' + this.indents() + log, 'color:green');
  }

  indents() {
    return new Array(this._indentCount + 1).join("  ");
  }
}