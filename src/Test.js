"use strict";

import Asserter from './Asserter'

export default class Test {
	constructor(desc, fn) {
		this.desc = desc;
		this.fn = fn;
		this.asserters = [];
		this.childTests = [];
	}

	addChild(test) {
		this.childTests.push(test);
	}

	run() {
		this.fn.call(this, this.getAsserter());
		this.childTests.forEach(t => t.run());
	}
	
	getAsserter() {
		let asserter = (desc) => {
			let asserter = new Asserter(desc);
			this.asserters.push(asserter);
			return asserter;
		};
		asserter.test = (desc, fn) => {
			this.addChild(new Test(desc, fn));
		};
		return asserter;
	}
}