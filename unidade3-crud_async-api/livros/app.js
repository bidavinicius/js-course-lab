const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let id = 0
let livros = []

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post("/livros", (req, res) => {
    const {titulo, autor, ano, genero} = req.body
    if (!titulo || !autor || !ano || !genero) {
        return res.status(400).send("Todos os dados são obrigatórios.");
    }
    id++
    const livro = {
        id,
        titulo,
        autor,
        ano,
        genero
    }

    livros.push(livro)
    res.status(201).send("Livro adicionado.")
})

app.patch('/livros/:id', (req, res) => {
    let idAtualizacao = parseInt(req.params.id)
    const indiceDoLivro = livros.findIndex(livro => livro.id === idAtualizacao);
    if (indiceDoLivro === -1) {
        return res.status(404).send("Livro não encontrado com o ID fornecido.");
    }
    let livroOriginal = livros[indiceDoLivro]
    let novosDados = req.body
  
    const livroAtualizado = {
        ...livroOriginal,
        ...novosDados
    }

    livros[indiceDoLivro] = livroAtualizado
    res.status(200).json(livros[indiceDoLivro]);
})

app.delete('/livros/:id', (req, res) => {
    const idDeletar = parseInt(req.params.id)
    const indiceDoLivro = livros.findIndex(livro => livro.id === idDeletar)
    if (indiceDoLivro === -1) {
        return res.status(404).send("Livro não encontrado com o ID fornecido.")
    }
    livros.splice(indiceDoLivro, 1)
    res.status(200).send("Livro deletado com sucesso!")
})

app.get('/livros/busca', (req, res) => {
    const { titulo, autor, ano, genero } = req.query;

    let resultado = livros;

    if (titulo) {
        resultado = resultado.filter(livro => 
            livro.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    if (autor) {
        resultado = resultado.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    if (genero) {
        resultado = resultado.filter(livro => 
            livro.genero.toLowerCase().includes(genero.toLowerCase())
        );
    }

    if (ano) {
        resultado = resultado.filter(livro => 
            livro.ano.toLowerCase().includes(ano.toLowerCase())
        );
    }
    
    res.status(200).json(resultado);
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})