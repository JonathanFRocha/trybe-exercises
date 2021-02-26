//Arrays para os exercicios
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [4, 6, 8];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let number of numbers) {
  console.log(`Segue cada número do array: ${number}`);
}

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
const getSum = (array) => {
  let initialValue = 0;
  for (let number of array) {
    initialValue += number;
  }
  return initialValue;
};
console.log(`A soma total do array é: ${getSum(numbers)}`);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

console.log(`A média aritmética do array é: ${getSum(numbers) / numbers.length}`);

// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
const biggerOrLessThan = (number, comparable) => {
  const bigger = number > comparable;
  if (bigger) {
    return `valor maior do que ${comparable}`;
  } else {
    return `valor menor ou igual a ${comparable}`;
  }
};

const avarage = getSum(numbers) / numbers.length;

console.log(biggerOrLessThan(avarage, 20));

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
const findHighest = (array) => {
  let number = array[0];
  for (let index = 1; index < numbers.length; index++) {
    if (array[index] > number) {
      number = array[index];
    }
  }
  return number;
};

console.log(`O maior valor do array é ${findHighest(numbers)}.`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
const findAmountOfOdds = (array) => {
  let amount = 0;
  for (let number of array) {
    if (number % 2 !== 0) {
      amount++;
    }
  }
  return amount === 0 ? "nenhum valor ímpar encontrado" : amount;
};

console.log(`Existe quantos números ímpares? ${findAmountOfOdds(numbers)}.`);

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
const findLowest = (array) => {
  let number = array[0];
  for (let index = 1; index < numbers.length; index++) {
    if (array[index] < number) {
      number = array[index];
    }
  }
  return number;
};

console.log(`O menor valor do array é ${findLowest(numbers)}.`);

// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
const createLinearArray = (size) => {
  const newArray = [];
  for (let index = 0; index < size; index++) {
    newArray[index] = index + 1;
  }
  return newArray;
};

console.log(`Criando um array de 25 números: ${createLinearArray(25)}.`);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
const bigArray = createLinearArray(25);
const arrayDividedByTwo = (array) => {
  const dividedByTwoArray = [];
  for (let number of array) {
    dividedByTwoArray.push(number / 2);
  }
  return dividedByTwoArray;
};

console.log(`Array de cima com todos os números divididos por 2: ${arrayDividedByTwo(bigArray)}.`);
