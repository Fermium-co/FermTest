import Asserter from '../Asserter';

Asserter.prototype.be = function (a, b) {
	this._result = a === b;
}