import Asserter from '../Asserter';

let defined = (a) => {
	let undefined = void 0;
	//let undefined = ((arg) => arg)(); 
	this.result = undefined !== a;
	if (!this.result) {
		this.message = a + ' is not defined';
	}
};

Asserter.prototype.defined = defined;

export default defined;