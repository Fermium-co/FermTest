"use strict";

export default class Asserter {
	constructor(desc) {
		this._desc = desc;
		this._result = null;
	}

	get desc() {
		return this._desc;
	}

	get result() {
		return this._result;
	}

	toString() {
		return this._desc + ' : ' + this._result;
	}

}