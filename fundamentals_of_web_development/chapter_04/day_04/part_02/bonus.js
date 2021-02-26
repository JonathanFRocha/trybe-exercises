// // Create a function that convert a roman number to arabic number

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

console.log(romanToArabicNumber("IX"));
