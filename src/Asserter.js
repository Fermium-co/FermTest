"use strict";

export default class Asserter {
	constructor(desc, fn) {
		this._desc = desc;
		this._fn = fn;

		this._result = null;
	}

	get desc() {
		return this._desc;
	}

	get fn() {
		return this._fn;
	}

	get result() {
		return this._result;
	}

	toString() {
		return this._desc + ' : ' + this._result;
	}

}