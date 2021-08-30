const threeDigitsMath = (a, b, c) => {
  try {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number")
      throw new Error("only numbers accepted");
    const result = (a + b) * c;
    if (result < 50) throw new Error("need to be above 50");
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

const first = Math.floor(Math.random() * 100 + 1);
const second = Math.floor(Math.random() * 100 + 1);
const third = Math.floor(Math.random() * 100 + 1);

threeDigitsMath(first, second, third);
