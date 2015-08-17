"use strict";

import Assert from './Assert';
import Test from './Test';

let allTests = [];
export default {
	test: (desc, fn) => {
		let test = new Test(desc, fn);
		allTests.push(test);
	},
	allTests: allTests
}