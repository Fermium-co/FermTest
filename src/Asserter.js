"use strict";

export default class Asserter {
	constructor(desc) {
		this.desc = desc;
		this.result = null;
	}

	toString() {
		return this.desc + ' : ' + this.result;
	}

	equal(a, b) {
		this.result = a == b;
	}

}