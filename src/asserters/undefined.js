import Asserter from '../Asserter';

let undefined_ = (a) => {
	let undefined = void 0;
	// or like this:   let undefined = ((arg) => arg)(); 
	this.result = undefined === a;
	if (!this.result) {
		this.message = a + ' is not undefined';
	}
};

Asserter.prototype.undefined = undefined_;

export default undefined_;