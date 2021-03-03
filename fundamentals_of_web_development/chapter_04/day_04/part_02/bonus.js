// // // Create a function that convert a roman number to arabic number

const romanToArabicNumber = (romanNumber) => {
  const romanNumberSplitted = romanNumber.split("");
  const romanNumberMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  if (romanNumberSplitted.length === 1 && romanNumberMap[romanNumberSplitted[0]]) {
    return romanNumberMap[romanNumberSplitted[0]];
  }
  if (romanNumberSplitted.length === 1 && !romanNumberMap[romanNumberSplitted[0]]) {
    return "invalid roman number";
  }
  let value = romanNumberMap[romanNumberSplitted[0]];
  for (let index = 1; index < romanNumberSplitted.length; index += 1) {
    const currentNumber = romanNumberMap[romanNumberSplitted[index]];
    const previousNumber = romanNumberMap[romanNumberSplitted[index - 1]];
    if (previousNumber < currentNumber) {
      value += currentNumber - previousNumber * 2;
    } else {
      value += currentNumber;
    }
  }
  return value;
};

const testRoman = "IX";
console.log(`${testRoman} in arabic number is ${romanToArabicNumber(testRoman)}`);

console.log("------------------------");

//Code Wars rSum.. - "16+18=214"
const add = (num1, num2) => {
  const splittedNum1 = num1.toString().split("");
  const splittedNum2 = num2.toString().split("");
  if (splittedNum1.length < splittedNum2.length) {
    const result = splittedNum2.length - splittedNum1.length;
    for (let index = 0; index < result; index += 1) {
      splittedNum1.unshift("0");
    }
  }
  if (splittedNum1.length > splittedNum2.length) {
    const result = splittedNum1.length - splittedNum2.length;
    for (let index = 0; index < result; index += 1) {
      splittedNum2.unshift("0");
    }
  }
  let rSum = "";
  splittedNum1.map((num, index) => (rSum += Number(num) + Number(splittedNum2[index])));
  console.log(rSum);
  return parseInt(rSum);
};

console.log(add(122, 81));
