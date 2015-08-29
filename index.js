import test from './src/FermTest';

test('Test1', (assert) => {
	assert('1 should be equal to 1').be(1, 1);
	assert('2 should NOT be equal to 1').be(2, 1);

	assert.test('child Test1', (assert) => {
		assert('3 should be equal to 3').be(3, 3);
		assert('4 should NOT be equal to 3').be(4, 3);
	});
});

test('Test2', assert => {
	assert('5 should be equal to 5').be(5, 5);

	assert.test('child Test2', assert => {
		assert('6 should be equal to 5').be(6, 5);

		assert.test('child child Test2', assert => {
			assert('7 should be equal to 7').be(7, 7);
		});
	});
});