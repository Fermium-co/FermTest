import Asserter from '../Asserter';
import utils from '../utils';

let throw_ = function(a, b) {
	let isThrew = false;
	let thrownError = undefined;

	this.result = false;

	if (!(a instanceof Function)) {
		throw new Error('first parameter must be a function');
	}

	try {
		a();
	} catch (e) {
		isThrew = true;
		thrownError = e;
	}

	if (!isThrew) {
		this.message = 'The function did not throw';
		return;
	}

	if (arguments.length == 1) {
		this.result = true;
		return;
	}

	if (utils.equals(b, thrownError)) {
		this.result = true;
	} else {
		this.messge = 'The function thrown ' + thrownError + ' not ' + b;
	}

};

Asserter.prototype.throw = throw_;

export default throw_;