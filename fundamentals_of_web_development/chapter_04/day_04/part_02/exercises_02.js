//Create a function that verify if a string is Palyndrome.

const isPalyndrome = (string) => {
  const lowerCaseString = string.toLowerCase();
  const reverseWord = lowerCaseString.split("").reduce((revAcc, char) => {
    return char + revAcc;
  });
  return lowerCaseString === reverseWord;
};

console.log(
  `Arara is a palyndrime? ${isPalyndrome(
    "Arara"
  )}, and what about "desenvolvimento"? is it a palyndrome? ${isPalyndrome("Desenvolvimento")}`
);

console.log("------------------");

// Create a function that return the highest value index in a array.

const highestValueIndex = (arr) => {
  if (!arr.length) {
    return "Empty Array";
  }
  let highestIndex = 0;
  for (let number in arr) {
    if (arr[number] > arr[highestIndex]) {
      highestIndex = number;
    }
  }
  return highestIndex;
};

const testArray = [2, 3, 6, 7, 10, 1];

console.log(
  `the index that has the highest value in [${testArray}] is ${highestValueIndex(testArray)}`
);

console.log("------------------");

// Create a function that return the lowest value index in a array.

const lowestValueIndex = (arr) => {
  if (!arr.length) {
    return "Empty Array";
  }
  let lowestIndex = 0;
  for (let number in arr) {
    if (arr[number] < arr[lowestIndex]) {
      lowestIndex = number;
    }
  }
  return lowestIndex;
};

const testArray2 = [2, 4, 6, 7, 10, 0, -3];

console.log(
  `the index that has the lowest value in [${testArray2}] is ${lowestValueIndex(testArray2)}`
);
console.log("------------------");

// Create a function that takes a array with names and return the name with greater number of letters.

const nameWithGreaterNumberOfLetters = (arr) => {
  if (!arr.length) {
    return "Empty Array";
  }
  let biggestName = arr[0];
  for (let name of arr) {
    if (name.length > biggestName.length) {
      biggestName = name;
    }
  }
  return biggestName;
};

const arrayOfNames = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

console.log(
  `The name with with greater number of letters in [${arrayOfNames}] is ${nameWithGreaterNumberOfLetters(
    arrayOfNames
  )}`
);
console.log("------------------");
// Create a function that takes a array and return the most repeated number

//Sort is applicable
const mostRepeatedNumber = (arr) => {
  const numberMap = {};
  let mostRepeatedNumber = undefined;
  for (number of arr) {
    if (!numberMap[number]) {
      numberMap[number] = 1;
    } else {
      numberMap[number] += 1;
    }
  }
  for (let key in numberMap) {
    if (mostRepeatedNumber === undefined) {
      mostRepeatedNumber = key;
    } else {
      if (numberMap[key] > numberMap[mostRepeatedNumber]) {
        mostRepeatedNumber = key;
      }
    }
  }
  return mostRepeatedNumber;
};

const testArray3 = [2, 3, 3, 5, 5, 5, 5, 8, 2, 3];

console.log(`The most repeated number in [${testArray3}] is ${mostRepeatedNumber(testArray3)}`);

console.log("------------------");

//Create a function that receives an integer and returns the sum of all numbers from 1 to N.
//Reduce is applicable
const sumOfAllIntegersBefore = (number) => {
  let totalSum = 0;
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    totalSum += currentNumber;
  }
  return totalSum;
};
const desiredNumber = 7;

console.log(
  `The sum of all numbers until ${desiredNumber} is ${sumOfAllIntegersBefore(desiredNumber)}`
);

console.log("------------------");
