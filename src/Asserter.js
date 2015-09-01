"use strict";

export default class Asserter {
	constructor(desc, fn) {
		this.desc = desc;
		this.fn = fn;

		this.result = null;
		this.message = '';
	}

	toString() {
		return this.desc + ' : ' + this.result;
	}
}