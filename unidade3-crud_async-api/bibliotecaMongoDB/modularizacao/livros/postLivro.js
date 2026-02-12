import { Book } from "../schemas/book_schema.js";

export async function addLivros (req, res) {
  const { title, author, year, genre } = req.body;

  if (!title || !author || !year || !genre) {
    return res.status(400).json({
      message: "Todos os campos (titulo, autor, ano e genero) são obrigatórios.",
    });
  }

  const novoLivro = new Book({
    title,
    author,
    year,
    genre
  });

  const salvarLivro = await novoLivro.save()

  res.status(201).send(`Livro "${novoLivro.title}" adicionado`, salvarLivro);
};