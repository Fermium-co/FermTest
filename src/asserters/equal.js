import Asserter from '../Asserter';
import utils from '../utils';

Asserter.prototype.equal = function (a, b) {
	this.result = utils.equals(a, b);
	if (!this.result) {
		this.message = a + ' is not equalt to ' + b;
	}
}