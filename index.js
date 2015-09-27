import test, {run} from './src/FermTest';
import HtmlReporter from './src/reporters/HtmlReporter';
import ConsoleReporter from './src/reporters/ConsoleReporter';

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
    if (b == 0) throw new Error('divided by zero');
    return a / b;
  }
}

test('calculator', assert1 => {
  let calc = new Calculator();

  assert1.test('add', assert2 => {
    assert2('should simply add two different numbers').be(calc.add(1, 2), 3);

    assert2('should add two numbers', a => {
      // arrange
      let num1 = 2;
      let num2 = 7;
      let expected = 9;
      
      let aa = b + 0;
		
      // act
      let actual = calc.add(num1, num2);
					
      // assert
      a.be(actual, expected);
    });

    assert2('should add again', a => {
      // arrange
      let num1 = 1;
      let num2 = 4;
      let expected = 5;
		
      // act
      let actual = calc.add(num1, num2);
			
      // assert
      a.be(actual, expected);
    });

    assert2('add should fail', a => {
      a.be(calc.add(1, 2), 4);
    });
    
    assert2('add should not fail', a => {
      a.no.be(calc.add(1, 2), 4);
    });
    assert2('add should fail again', a => {
      a.no.be(calc.add(1, 2), 3);
    });
  });

  assert1.test('sub', assert2 => {
    // arrange
    let num1 = 8;
    let num2 = 3;
    let expected = 5;
		
    // act
    let actual = calc.sub(num1, num2);
		
    // assert
    assert2('should subtract two numbers').be(actual, expected);

    assert2('should subtract two real numbers', asserter => {
      // arrange
      let num1 = 85;
      let num2 = 37;
      let expected = 85 - 37;
		
      // act
      let actual = calc.sub(num1, num2);
		
      // assert
      asserter.be(actual, expected);
    });

    assert2('should subtract two numbers realy fast', a => {
      a.be(calc.sub(1, 2), -1);
    });

    assert2('should subtract two big numbers', a => {
      let num1 = 850232216;
      let num2 = 123245;

      a.be(calc.sub(num1, num2), num1 - num2);
    });
  });

  assert1.test('mul', assert2 => {
    // arrange
    let num1 = 3;
    let num2 = 4;
    let expected = 12;
		
    // act
    let actual = calc.mul(num1, num2);
		
    // assert
    assert2('should multiply two numbers').be(actual, expected);
    assert2('should do multiply operation correctly for 1*2').be(calc.mul(1, 2), 2);
    assert2('should do multiply operation correctly for 2*2').be(calc.mul(2, 2), 4);
    assert2('should do multiply operation correctly for 3*2').be(calc.mul(3, 2), 6);
    assert2('should do multiply operation correctly for 4*2').be(calc.mul(4, 2), 8);
  });

  assert1.test('div', assert2 => {
    // arrange
    let num1 = 18;
    let num2 = 6;
    let expected = 3;
		
    // act
    let actual = calc.div(num1, num2);
		
    // assert
    assert2('should divide two numbers').be(actual, expected);

    assert2.test('big number division', assert3 => {
      assert3('should divide level 1 big numbers!').be(calc.div(123456789, 123), 123456789 / 123);
      assert3('should divide level 2 big numbers!').be(calc.div(987654321, 321), 987654321 / 321);
      assert3('should divide level 3 big numbers!').be(calc.div(147852369, 312), 147852369 / 312);
    });

    assert2('should throw an error on divided by zero').throw(() => calc.div(3, 0));
  });
});


window.setTimeout(() => {
  //run(HtmlReporter);
  run(ConsoleReporter);
}, 0);