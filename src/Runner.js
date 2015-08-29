export default class Runner {
	constructor(tests) {
		this.tests = tests;
	}

	run() {
		if (!this.tests) return;
		this.tests.forEach(t => {
			t.run();
		});
	}
}