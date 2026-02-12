import { Deck } from "../schemas/deck_schema.js";

const updateDeck = async(id, nome) => {
    try{
        const updatedDeck = await Deck.findByIdAndUpdate(
            id,
            {nome},
            {new: true, runValidators: true}
        )
        return updatedDeck
    } catch (error){
        console.error("Erro ao atualizar o baralho", error.message)
        throw error
    }
  }
  
  export async function attDeck(req,res){
    const {id} = req.params
      const {nome} = req.body
      const updatedDeck = await updateDeck(id, nome)
      if(updatedDeck){
          res.status(200).send({message: "Baralho atualizado com sucesso!", deck: updatedDeck})
      } else {
          res.status(404).send({message: "Baralho não encontrado"})
      }
  }