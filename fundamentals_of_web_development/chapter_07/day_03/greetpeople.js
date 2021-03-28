const assert = require("assert");

const greetPeople = (people) => {
  let greeting = "Hello ";
  const arr = [];

  for (const person in people) {
    arr.push(greeting + people[person]);
  }
  return arr;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];

assert.deepStrictEqual(greetPeople(parameter), result, result);
