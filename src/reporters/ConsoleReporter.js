import Reporter from './Reporter';

export default class ConsoleReporter extends Reporter {
	constructor(tests) {
		super(tests);
	}

	report() {
		let indents = [];

		let showAsserterResult = a => {
			let spaces = indents.join('');
			if (a.result) {
				ConsoleReporter.success(spaces + a.desc);
			} else {
				ConsoleReporter.fail(spaces + a.desc);
			}
		};

		let showTestResults = t => {
			t.asserters.forEach(showAsserterResult);
		};

		let reportTests = tests => {
			tests.forEach(t => {
				console.info(t.desc);
				showTestResults(t);
				if (t.childTests.length > 0) {
					indents.push("  ");
					reportTests(t.childTests);
					indents.pop();
				}
				if (indents.length == 0) {
					console.log('==================================================');
				}
			});
		};

		reportTests(this.tests);
	}


	static fail(text) {
		console.log('%c' + text, 'color:red');
	}

	static success(text) {
		console.log('%c' + text, 'color:green');
	}
}