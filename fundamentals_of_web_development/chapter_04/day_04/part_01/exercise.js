// create a player Object with some data

const player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

console.log(`The player ${player.name} ${player.lastName} is ${player.age} years old. `);

console.log("----------------");

console.log(
  `The player ${player.name} was named the best for ${player.bestInTheWorld.length} years. `
);

console.log("----------------");

console.log(
  `The player ${player.name} won ${player.medals.golden} golden medals and ${player.medals.silver} silver medals.`
);
