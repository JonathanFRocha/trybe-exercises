const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// const addKeyAndValue = (object, key, value) => {
//   object[key] = value;
// };

// const listObjectKeys = (object) => Object.keys(object);

// const getObjectLength = (object) => Object.keys(object).length;

// const getObjectValues = (object) => Object.values(object);

// addKeyAndValue(lesson2, "turno", "manhã");
// // console.log(lesson2);
// // console.log(listObjectKeys(lesson2));
// // console.log(getObjectValues(lesson2));

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

// // Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

// const getNumberOfStudents = (object) => {
//   const keys = Object.keys(object);
//   let students = 0;
//   for (let index = 0; index < keys.length; index += 1) {
//     students += object[keys[index]].numeroEstudantes;
//   }
//   return students;
// };

// console.log(getNumberOfStudents(allLessons));

// // Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

// const getValueByNumber = (object, number) => {
//   const values = Object.values(object);
//   return values[number];
// };
// console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros,
// sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, key, value) => {
  if (!object[key]) {
    return false;
  } else {
    return object[key] === value;
  }
};

console.log(verifyPair(lesson3, "turno", "noite"));
// Output: true,
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// Output: false
