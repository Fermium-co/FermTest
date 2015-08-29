import test from './src/FermTest';

class Calculator {
	add(a, b) {
		return a + b;
	}

	sub(a, b) {
		return a - b;
	}

	mul(a, b) {
		return a * b;
	}

	div(a, b) {
		return a / b;
	}
}

test('calculator', A1 => {
	let calc = new Calculator();

	A1.test('add', A2 => {
		A2('should simply add two different numbers').be(calc.add(1, 2), 3);

		A2('should add two numbers', a => {
			// arrange
			let num1 = 2;
			let num2 = 7;
			let expected = 9;
		
			// act
			let actual = calc.add(num1, num2);
					
			// assert
			a.be(actual, expected);
		});

		A2('should add again', a => {
			// arrange
			let num1 = 1;
			let num2 = 4;
			let expected = 5;
		
			// act
			let actual = calc.add(num1, num2);
			
			// assert
			a.be(actual, expected);
		});

		A2('add should fail', a => {
			a.be(calc.add(1, 2), 4);
		});
	});

	A1.test('sub', A2 => {
		// arrange
		let num1 = 8;
		let num2 = 3;
		let expected = 5;
		
		// act
		let actual = calc.sub(num1, num2);
		
		// assert
		A2('should subtract two numbers').be(actual, expected);

		A2('should subtract two real numbers', asserter => {
			// arrange
			let num1 = 85;
			let num2 = 37;
			let expected = 85 - 37;
		
			// act
			let actual = calc.sub(num1, num2);
		
			// assert
			asserter.be(actual, expected);
		});

		A2('should subtract two numbers realy fast', a => {
			a.be(calc.sub(1, 2), -1);
		});

		A2('should subtract two big numbers', a => {
			let num1 = 850232216;
			let num2 = 123245;

			a.be(calc.sub(num1, num2), num1 - num2);
		});
	});

	A1.test('mul', A2 => {
		// arrange
		let num1 = 3;
		let num2 = 4;
		let expected = 12;
		
		// act
		let actual = calc.mul(num1, num2);
		
		// assert
		A2('should multiply two numbers').be(actual, expected);
		A2('should do multiply operation correctly for 1*2').be(calc.mul(1, 2), 2);
		A2('should do multiply operation correctly for 2*2').be(calc.mul(2, 2), 4);
		A2('should do multiply operation correctly for 3*2').be(calc.mul(3, 2), 6);
		A2('should do multiply operation correctly for 4*2').be(calc.mul(4, 2), 8);
	});

	A1.test('div', A2 => {
		// arrange
		let num1 = 18;
		let num2 = 6;
		let expected = 3;
		
		// act
		let actual = calc.div(num1, num2);
		
		// assert
		A2('should divide two numbers').be(actual, expected);
	});
});