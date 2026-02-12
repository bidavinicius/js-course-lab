import { Book } from "../schemas/book_schema.js";

const getBooks = async() => {
    try{
        return await Book.find()
    }catch(error){
        console.error("Erro ao buscar os livros:", error.message)
        throw error
    }
}

export async function listLivros(req, res) {
    const books = await getBooks()
    res.status(200).send(books)
}