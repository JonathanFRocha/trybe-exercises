const express = require("express");
const { Book } = require("../models");
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: "Livro não encontrado" });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id } });
    if (!updatedBook) return res.status(404).json({ message: "Livro não encontrado" });
    return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.destroy({ where: { id } });

    console.log(deletedBook);

    return res.status(200).json({ message: "Livro excluído com sucesso!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Algo deu errado" });
  }
});

module.exports = router;
