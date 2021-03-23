const changeString = (string) => `Tryber ${string} aqui!`;

console.log(changeString("Bebeto"));

const mySkills = ["html", "css", "git", "bash", "javascript"];

const getNewString = (array) => `${changeString("Bebeto")}, Minhas cinco principais habilidades são:
${array.sort()}`;

console.log(getNewString(mySkills));
