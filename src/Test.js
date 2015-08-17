"use strict";

import Assert from './Assert';

export default class Test {
	constructor(desc, fn) {
		this.desc = desc;
		this.fn = fn;
		this.asserters = [];
		this.childTests = [];
	}

	add(test) {
		this.childTests.push(test);
	}

	run() {
		let assert = new Assert(this);
		this.fn.call(this, assert.getAsserter());
		this.childTests.forEach(t => t.run());
	}
}