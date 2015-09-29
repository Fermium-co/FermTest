import Reporter from './Reporter';

export default class ConsoleReporter extends Reporter {
  constructor(tests) {
    super(tests);
  }

  clear() {
    console.clear();
  }

  log(log) {
    console.log(this.fixIndents(log));
  }

  info(log) {
    console.info(this.fixIndents(log));
  }

  fail(log) {
    console.log('%c' + this.fixIndents(log), 'color:red');
  }

  success(log) {
    console.log('%c' + this.fixIndents(log), 'color:green');
  }

  indents() {
    return new Array(this._indentCount + 1).join("  ");
  }

  fixIndents(value) {
    let spaces = this.indents();
    return spaces + value.replace(/\n/g, '\n' + spaces);
  }
}