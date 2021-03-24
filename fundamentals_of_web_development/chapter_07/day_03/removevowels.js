const assert = require("assert");

const removeVowels = (word) => {
  const characters = word.split("");
  const results = [];
  let currentNumber = 1;
  for (let index = 0; index < characters.length; index += 1) {
    let currentLetter = characters[index].toLowerCase();

    console.log(currentLetter);
    switch (currentLetter) {
      case "a":
        results.push(currentNumber);
        currentNumber += 1;
        break;
      case "e":
        results.push(currentNumber);
        currentNumber += 1;
        break;
      case "i":
        results.push(currentNumber);
        currentNumber += 1;
        break;
      case "o":
        results.push(currentNumber);
        currentNumber += 1;
        break;
      case "u":
        results.push(currentNumber);
        currentNumber += 1;
        break;
      default:
        results.push(characters[index]);
    }
  }
  return results.join("");
};

const parameter = "Dayane";
const result = "D1y2n3";

assert.deepStrictEqual(removeVowels(parameter), result);
