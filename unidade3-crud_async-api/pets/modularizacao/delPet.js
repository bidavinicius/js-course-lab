import { Pet } from "../pet_schema.js";

const deletePet = async(id) => {
    try{
        return await Pet.findByIdAndDelete(id)
    }catch(error){
        console.error("Erro ao deletar o pet", error.message)
        throw error
    }
}

export async function delPet(req,res){
    const {id} = req.params
    const deletedPet = await deletePet(id)
    if(deletedPet){
        res.status(200).send({message: "Pet deletado com sucesso", pet: deletedPet})
    }else{
        res.status(404).send({message: "Pet não encontrado."})
    }
}