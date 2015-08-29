import Asserter from '../Asserter';
import utils from '../utils';

Asserter.prototype.equal = function (a, b) {
	this._result = utils.equals(a, b);
}

export let equal = 'equal';