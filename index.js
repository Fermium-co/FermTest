import FermTest from './src/FermTest';

FermTest.test('Test1', (assert) => {
	assert('1 should be equal to 1').equal(1, 1);
	assert('2 should NOT be equal to 1').equal(2, 1);

	assert.test('child Test1', (assert) => {
		assert('3 should be equal to 3').equal(3, 3);
		assert('4 should NOT be equal to 3').equal(4, 3);
	});
});

FermTest.test('Test2', (assert) => {
	assert('5 should be equal to 5').equal(5, 5);

	assert.test('child Test2', (assert) => {
		assert('6 should be equal to 5').equal(6, 5);
	});
});

FermTest.allTests.forEach((test) => {
	console.log('running test "' + test.desc + '"');
	test.run();
	console.log('test results: ');
	showResult(test);
	console.log('childTests results: ');
	test.childTests.forEach(showResult);
	console.log('------------------------------------------------------------------------')
});

function showResult(test) {
	console.log(test.asserters.map(a => a.toString()));
}