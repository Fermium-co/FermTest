import Asserter from '../Asserter';

Asserter.prototype.be = function (a, b) {
	this.result = a === b;
	if (!this.result) {
		this.message = a + ' is not ' + b;
	}
}