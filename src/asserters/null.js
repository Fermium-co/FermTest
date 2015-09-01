import Asserter from '../Asserter';

let null_ = (a) => {
	this.result = a === null;
	if (!this.result) {
		this.message = a + ' is not null';
	}
};

Asserter.prototype.null = null_;

export default null_;