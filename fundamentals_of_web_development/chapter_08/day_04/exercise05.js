const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce((acc, aNames) => {
    let current = 0;
    aNames.split("").forEach((letter) => {
      if (letter.toLowerCase() == "a") {
        current += 1;
      }
    });
    return acc + current;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
