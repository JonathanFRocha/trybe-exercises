//Variables to do operations.

const a = 100;
const b = 10;

// Class that do the arithmetic operations.
class arithmeticOperators {
  sum(value1, value2) {
    return value1 + value2;
  }
  subtract(value1, value2) {
    return value1 - value2;
  }
  multiply(value1, value2) {
    return value1 * value2;
  }
  divide(value1, value2) {
    return value1 / value2;
  }
  remainder(value1, value2) {
    return value1 % value2;
  }
}

//const that declare new class to test the operations asked in the exercise

// const operation = new arithmeticOperators();
// console.log(
//   `Soma: ${operation.sum(a, b)} - Subtraindo: ${operation.subtract(
//     a,
//     b
//   )} - Multiplicar: ${operation.multiply(a, b)} - Dividir: ${operation.divide(
//     a,
//     b
//   )} - Resto: ${operation.remainder(a, b)}`
// );

//variables to test boolean and sort

const value1 = 50;
const value2 = -10;
const value3 = 20;

//class that will handle the problems

class findNumber {
  greatestNumberOf2(value1, value2) {
    if (value1 >= value2) {
      return value1;
    }
    return value2;
  }

  greatestNumberOf3(value1, value2, value3) {
    return Math.max(value1, value2, value3);
  }
}

//const that will do the operations.

// const finder = new findNumber();
// console.log(
//   `maior entre os dois primeiros: ${finder.greatestNumberOf2(
//     value1,
//     value2
//   )} -- maior entre os trés primeiros: ${finder.greatestNumberOf3(value1, value2, value3)}`
// );

class booleanTest {
  myNumberIs(value) {
    if (value < 0) {
      return "negative";
    } else if (value > 0) {
      return "positive";
    } else {
      return "zero";
    }
  }
}

const testBoolean = new booleanTest();

console.log(`meu número é: ${testBoolean.myNumberIs(value2)}`);
