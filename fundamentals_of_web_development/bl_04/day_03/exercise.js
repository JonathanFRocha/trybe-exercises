// print a square function

const printSquare = (size) => {
  for (let row = 0; row < size; row++) {
    let star = "";

    for (let column = 0; column < size; column++) {
      star += "*";
    }

    console.log(star);
  }
};

printSquare(5);

console.log("-----------");
//print triangle

const printTriangle = (size) => {
  for (let row = 1; row <= size; row++) {
    let star = "";

    for (let column = 1; column <= row; column++) {
      star += "*";
    }

    console.log(star);
  }
};

printTriangle(5);

console.log("-----------");

const printReverseTriangle = (size) => {
  for (let row = size; row > 0; row--) {
    let star = "";

    for (let column = 1; column <= size; column++) {
      if (column < row) {
        star += " ";
      } else {
        star += "*";
      }
    }

    console.log(star);
  }
};

printReverseTriangle(5);

console.log("-----------");

const pyramid = (n) => {
  const midpoint = Math.ceil(n / 2);
  for (let row = 0; row < midpoint; row++) {
    let star = "";
    for (let column = 1; column <= n; column++) {
      if (midpoint - row <= column && row + midpoint >= column) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
};

pyramid(5);

console.log("-----------");

const halfEmptyPyramid = (n) => {
  const midpoint = Math.ceil(n / 2);
  for (let row = 0; row < midpoint; row++) {
    let star = "";
    for (let column = 1; column <= n; column++) {
      if (row + 1 == midpoint) {
        star += "*";
      } else if (midpoint - row == column || midpoint + row == column) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
};

halfEmptyPyramid(7);

console.log("-----------");

const isPrimeNumber = (number) => {
  let factors = -1;
  for (let index = 2; index <= number; index++) {
    if (number % index == 0) {
      factors++;
    }
  }
  if (!factors) {
    return "Sim";
  } else {
    return "Não";
  }
};

console.log(`É número Primo? ${isPrimeNumber(11)}`);
