const readline = require("readline-sync");
// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |
const weight = readline.questionFloat("What is your weight? ");
const height = readline.questionFloat("What is your height? ");

const getImc = (height, weight) => {
  const imc = weight / (height * height);
  if (imc < 18.5) return "Below minimum weight";
  if (imc >= 18.5 && imc <= 24.9) return "Normal weight";
  if (imc >= 25 && imc <= 29.9) return "Above normal weight";
  if (imc >= 30 && imc <= 34.9) return "Obese 1";
  if (imc >= 35 && imc <= 39.9) return "Obese 2";
  if (imc >= 40) return "Obese 3";
};

console.log("your imc is " + getImc(height, weight));
