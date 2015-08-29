"use strict";

import Test from './Test';
import Runner from './Runner';
import ConsoleReporter from './reporters/ConsoleReporter';

import {be} from './asserters/be';
import {equal} from './asserters/equal';

export let allTests = [];
export default (desc, fn) => {
	let test = new Test(desc, fn);
	allTests.push(test);
}

window.setTimeout(() => {
	let runner = new Runner(allTests);
	runner.run();

	let reporter = new ConsoleReporter(allTests);
	reporter.report();
}, 0);