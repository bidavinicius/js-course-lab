import { Book } from "../schemas/book_schema.js";

const updateBook = async(id, title, author, year, genre) => {
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

export async function attLivro(req,res){
  const {id} = req.params
    const {title, author, year, genre} = req.body
    const updatedBook = await updateBook(id, title, author, year, genre)
    if(updatedBook){
        res.status(200).send({message: "Livro atualizado com sucesso!", book: updatedBook})
    } else {
        res.status(404).send({message: "Livro não encontrado"})
    }
}