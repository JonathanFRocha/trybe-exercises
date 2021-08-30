const express = require("express");

const app = express(); // 1

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/search", findElement); // 2

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
}); // 3

function findElement(req, res) {
  const { name } = req.query;
  const drink = drinks.find((drinke) => {
    console.log(drinke.name);
    console.log(name);
    return drinke.name == name;
  });
  console.log(name);
  console.log(drink);
  if (!drink) return res.status(404).json({ Error: "Drink Not Found" });
  res.status(200).json(drink);
}
