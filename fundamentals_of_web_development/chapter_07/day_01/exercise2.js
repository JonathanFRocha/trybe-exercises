const fatorial = (n) => (n <= 1 ? 1 : n * fatorial(n - 1));

console.log(fatorial(4));

const longestWord = (phrase) => {
  const sortedPhrase = phrase.split(" ").sort((a, b) => a.length - b.length);
  return sortedPhrase[sortedPhrase.length - 1];
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
