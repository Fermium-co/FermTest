"use strict";

import Asserter from './Asserter'
import Test from './Test';

export default class Assert {
	constructor(test) {
		this.test = test;
	}

	getAsserter() {
		let asserter = (desc) => {
			let asserter = new Asserter(desc);
			this.test.asserters.push(asserter);
			return asserter;
		};
		asserter.test = (desc, fn) => {
			this.test.add(new Test(desc, fn));
		};
		return asserter;
	}
}