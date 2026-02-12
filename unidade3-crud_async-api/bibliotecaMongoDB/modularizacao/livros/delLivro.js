import { Book } from "../schemas/book_schema.js"

const deleteBook = async(id) => {
  try {
      return await Book.findByIdAndDelete(id)
  } catch (error) {
      console.error("Erro ao deletar o livro:", error.message)
      throw error
  }
}

export async function delLivro(req,res){
    const {id} = req.params
    const deletedBook = await deleteBook(id)
    if(deletedBook){
        res.status(200).send({message: "Livro deletado com sucesso!", book: deletedBook})
    } else {
        res.status(404).send({message: "Livro não encontrado!"})
    }
}