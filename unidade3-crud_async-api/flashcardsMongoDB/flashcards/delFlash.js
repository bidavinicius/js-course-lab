import { Flashcard } from "../schemas/flashcard_schema.js";

const deleteFlash = async(id) => {
    try {
        return await Flashcard.findByIdAndDelete(id)
    } catch (error) {
        console.error("Erro ao deletar o flashcard:", error.message)
        throw error
    }
  }
  
  export async function delFlash(req,res){
      const {id} = req.params
      const deletedFlashcard = await deleteFlash(id)
      if(deletedFlashcard){
          res.status(200).send({message: "Flashcard deletado com sucesso!", flashcard: deletedFlashcard})
      } else {
          res.status(404).send({message: "Flashcard não encontrado!"})
      }
  }