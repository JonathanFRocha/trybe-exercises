const assert = require("assert");

const findTheNeedle = (words, needle) => {
  let indexPosition = -1;
  words.forEach((word, index) => {
    if (word === needle) {
      indexPosition = index;
    }
  });
  return indexPosition;
};

let words = ["house", "train", "slide", "needle", "book"];
let expected = 3;
let output = findTheNeedle(words, "needle");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = 0;
output = findTheNeedle(words, "plant");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = -1;
output = findTheNeedle(words, "plat");
assert.strictEqual(output, expected);
