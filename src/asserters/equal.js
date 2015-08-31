import Asserter from '../Asserter';
import utils from '../utils';

let equal = (a, b) => {
	this.result = utils.equals(a, b);
	if (!this.result) {
		this.message = a + ' is not equalt to ' + b;
	}
};

Asserter.prototype.equal = equal;

export default equal;