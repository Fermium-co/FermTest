import Reporter from './Reporter';

export default class HtmlReporter extends Reporter {
  constructor(tests) {
    super(tests);
  }

  formatErrorStack(stack) {
    var regEx = new RegExp('\n', 'g');
    return stack.replace(regEx, '<br>');
  }

  clear() {
    document.documentElement.innerHTML = "";
    document.write('<br>');
  }

  log(log) {
    document.write(this.indents() + log + '<br>');
  }

  info(log) {
    //this.log(log);
    let div = document.createElement('div');
    div.style.color = 'blue';
    div.innerHTML = this.indents() + log;
    document.body.appendChild(div);
  }

  fail(log) {
    //this.log(log);
    let div = document.createElement('div');
    div.style.color = 'red';
    div.innerHTML = this.indents() + log;
    document.body.appendChild(div);
  }

  success(log) {
    //this.log(log);
    let div = document.createElement('div');
    div.style.color = 'green';
    div.innerHTML = this.indents() + log;
    document.body.appendChild(div);
  }

  indents() {
    return new Array(this._indentCount + 1).join("&nbsp;&nbsp;");
  }
}