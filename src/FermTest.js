"use strict";

import Test from './Test';
import Runner from './Runner';
import ConsoleReporter from './reporters/ConsoleReporter';

import be from './asserters/be';
import contain from './asserters/contain';
import defined from './asserters/defined';
import equal from './asserters/equal';
import falsy from './asserters/falsy';
import greater from './asserters/greater';
import less from './asserters/less';
import nan from './asserters/nan';
import null_ from './asserters/null';
import throw_ from './asserters/throw';
import truthy from './asserters/truthy';
import undefined from './asserters/undefined';

export let allTests = [];
export default (desc, fn) => {
	let test = new Test(desc, fn);
	allTests.push(test);
}

export function run(reporter) {
	let runner = new Runner(allTests);
	runner.run();
	
	let reporterInstance = new (reporter || ConsoleReporter)(allTests);
	reporterInstance.report();
}