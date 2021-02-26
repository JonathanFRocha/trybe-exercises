// variable for the grade

const grade = 0;

// class to handle the grade conversion.

class gradeConversion {
  myGradeIsEquivalentTo(grade) {
    if (grade < 0 || grade > 100) {
      return "erro, nota invalida!";
    }

    if (grade >= 90 && grade <= 100) {
      return "A";
    } else if (grade >= 80 && grade < 90) {
      return "B";
    } else if (grade >= 70 && grade < 80) {
      return "C";
    } else if (grade >= 60 && grade < 70) {
      return "D";
    } else if (grade >= 50 && grade < 60) {
      return "E";
    } else if (grade < 50 && grade >= 0) {
      return "F";
    }
  }
}

const newGrade = new gradeConversion();

console.log(`minha nova nota é ${newGrade.myGradeIsEquivalentTo(grade)}`);

// variable to check if has odd or even

const a = 4;
const b = 6;
const c = 2;

// class to check if has odd and even.
class checkOddAndEven {
  checkIfHasEven(value1, value2, value3) {
    if (value1 % 2 === 0 || value2 % 2 === 0 || value3 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkIfHasOdd(value1, value2, value3) {
    if (value1 % 2 !== 0 || value2 % 2 !== 0 || value3 % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  }
}

const numberChecker = new checkOddAndEven();

console.log(
  `Tem algum par nesses números? ${numberChecker.checkIfHasEven(
    a,
    b,
    c
  )}. E impar? tem algum? ${numberChecker.checkIfHasOdd(a, b, c)}`
);
