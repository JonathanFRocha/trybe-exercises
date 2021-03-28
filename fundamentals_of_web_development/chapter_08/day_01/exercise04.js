// Crie uma HOF que receberá três parâmetros.
// O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante)
// e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante.
// Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const getPoint = (a, b) => {
  if (a === b) {
    return 1;
  } else if (b === "N.A") {
    return 0;
  } else {
    return -0.5;
  }
};

const checkAnswers = (right, toCheck, aux) => {
  let sumPoint = 0;
  for (let index = 0; index < right.length; index += 1) {
    const point = aux(right[index], toCheck[index]);
    sumPoint += point;
  }
  return sumPoint;
};

console.log(checkAnswers(rightAnswers, studentAnswers, getPoint));
