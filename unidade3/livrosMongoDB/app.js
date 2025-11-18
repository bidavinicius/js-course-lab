import express from "express"
import mongoose from "mongoose"
import { createBook, deleteBook, getBooks,updateBook } from "./mongoFunctions.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const port = 3000
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI
)
  
  mongoose.connection.once("open", () => {
    console.log("Conectado ao MongoDB")
  })
  
  mongoose.connection?.on('error', (err) => {
    console.error(`Error to connect - MongoDB: Error: ${err.message}`)
  })

app.get('/livros', async (req, res) => {
    const books = await getBooks()
    res.status(200).send(books)
})

app.post("/livros", async (req, res) => {
    const {title, author, year, genre} = req.body
    const newBook = await createBook(title, author, year, genre)

    res.status(201).send({message: "Livro criado com sucesso!", book: newBook})
})

app.put('/livros/:id', async (req, res) => {
    const {id} = req.params
    const {title, author, year, genre} = req.body
    const updatedBook = await updateBook(id, title, author, year, genre)
    if(updatedBook){
        res.status(200).send({message: "Livro atualizado com sucesso!", book: updatedBook})
    } else {
        res.status(404).send({message: "Livro não encontrado"})
    }
})

app.delete('/livros/:id', async (req, res) => {
    const {id} = req.params
    const deletedBook = await deleteBook(id)
    if(deletedBook){
        res.status(200).send({message: "Livro deletado com sucesso!", book: deletedBook})
    } else {
        res.status(404).send({message: "Livro não encontrado!"})
    }
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})