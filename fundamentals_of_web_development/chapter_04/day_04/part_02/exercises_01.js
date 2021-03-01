// Part 01 - Objects and For/In

//Object for the exercises

const info = {
  character: "Margarida",
  origin: "Pato Donald",
  note: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// Print in the console a welcome message to the character above.

console.log(`Welcome, ${info.character}!`);

//Insert into the object a new prop called "recurring" and its value "Sim" then print it in the console.
info["recurring"] = "Sim";
console.log("------------------");

// do a for/in to show all key values of info

for (let keys in info) {
  console.log(info[keys]);
}
console.log("------------------");

// define a new object using the same keys of info

const info2 = {
  character: "Tio Patinhas",
  origin: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  note: "O último MacPatinhas",
  recurring: "Sim",
};

console.log(`${info.character} e ${info2.character}`);
console.log(`${info.origin} e ${info2.origin}`);
console.log(`${info.note} e ${info2.note}`);
console.log(
  `${info.recurring === "Sim" && info2.recurring === "Sim" ? "Ambos" : "Error"} recorrentes.`
);
