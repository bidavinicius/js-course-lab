import { Book } from "./book_schema.js"

export const createBook = async (title, author, year, genre) => {
    try {
        const newBook = new Book({title, author, year, genre})
        return await newBook.save()
    } catch (error) {
        console.error("Erro ao criar o livro", error.message)
        throw error
    }
}

export const getBooks = async() => {
    try{
        return await Book.find()
    }catch(error){
        console.error("Erro ao buscar os livros:", error.message)
        throw error
    }
}

export const updateBook = async(id, title, author, year, genre) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            {title, author, year, genre},
            {new: true, runValidators: true}
        )
        return updatedBook
    } catch (error){
        console.error("Erro ao atualizar o livro", error.message)
        throw error
    }
}

export const deleteBook = async(id) => {
    try {
        return await Book.findByIdAndDelete(id)
    } catch (error) {
        console.error("Erro ao deletar o livro:", error.message)
        throw error
    }
}