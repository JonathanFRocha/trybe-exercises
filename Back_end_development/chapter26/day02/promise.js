const threeDigitsMath = (a, b, c) =>
  new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
      reject("only numbers accepted");
    const result = (a + b) * c;
    if (result < 50) reject("need to be above 50");
    resolve(result);
  })
    .then((result) => console.log(result))
    .catch((e) => console.error(e));

const first = Math.floor(Math.random() * 100 + 1);
const second = Math.floor(Math.random() * 100 + 1);
const third = Math.floor(Math.random() * 100 + 1);

threeDigitsMath(first, second, third);
