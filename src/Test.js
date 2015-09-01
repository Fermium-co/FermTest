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
		let asserterFn = (desc, fn) => {
			let asserter = new Asserter(desc, fn);
			this.asserters.push(asserter);
			if (fn && typeof fn === 'function') {
				fn.call(this, asserter);
			}
			return asserter;
		};
		asserterFn.test = (desc, fn) => {
			this.addChild(new Test(desc, fn));
		};
		return asserterFn;
	}
}