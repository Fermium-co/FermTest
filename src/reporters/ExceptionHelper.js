export default class ExceptionHelper {
  constructor() {
  }
  
  static getMessage(error) {
    var message = '';

    if (error.name && error.message) {
      message += error.name + ': ' + error.message;
    } else {
      message += error.toString() + ' thrown';
    }

    if (error.fileName || error.sourceURL) {
      message += ' in ' + (error.fileName || error.sourceURL);
    }

    if (error.line || error.lineNumber) {
      message += ' (line ' + (error.line || error.lineNumber) + ')';
    }

    return message;
  }

  static getStack(error) {
    return error ? error.stack : null;
  }
};