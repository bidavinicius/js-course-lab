import { Flashcard } from "../schemas/flashcard_schema.js";

const updateFlashcard = async(id, pergunta, resposta, idBaralho) => {
    try{
        const updatedFlash = await Flashcard.findByIdAndUpdate(
            id,
            {pergunta, resposta, idBaralho},
            {new: true, runValidators: true}
        )
        return updatedFlash
    } catch (error){
        console.error("Erro ao atualizar o flashcard", error.message)
        throw error
    }
  }
  
  export async function attFlash(req,res){
    const {id} = req.params
      const {pergunta, resposta, idBaralho} = req.body
      const updatedFlash = await updateFlashcard(id, pergunta, resposta, idBaralho)
      if(updatedFlash){
          res.status(200).send({message: "Flashcard atualizado com sucesso!", flashcard: updatedFlash})
      } else {
          res.status(404).send({message: "Flashcard não encontrado"})
      }
  }