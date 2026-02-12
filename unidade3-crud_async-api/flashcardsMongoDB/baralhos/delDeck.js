import { Deck } from "../schemas/deck_schema.js";

const deleteDeck = async(id) => {
    try {
        return await Deck.findByIdAndDelete(id)
    } catch (error) {
        console.error("Erro ao deletar o baralho:", error.message)
        throw error
    }
  }
  
  export async function delDeck(req,res){
      const {id} = req.params
      const deletedDeck = await deleteDeck(id)
      if(deletedDeck){
          res.status(200).send({message: "Baralho deletado com sucesso!", deck: deletedDeck})
      } else {
          res.status(404).send({message: "Baralho não encontrado!"})
      }
  }