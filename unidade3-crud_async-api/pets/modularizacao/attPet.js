import { Pet } from "../pet_schema.js";

const updatePet = async (id, nome, especie, idade, status) => {
    try{
        const updatedPet = await Pet.findByIdAndUpdate(
            id,
            {nome, especie, idade, status},
            {new: true, runValidators: true}
        )
        return updatedPet
    }catch(error){
        console.error("Erro ao atualizar o pet", error.message)
        throw error
    }
}

export async function attPet(req,res){
    const {id} = req.params
    const {nome, especie, idade, status} = req.body
    const updatedPet = await updatePet(id, nome, especie, idade, status)
    if(updatedPet){
        res.status(200).send({message: "Pet atualizado com sucesso!", pet: updatedPet})
    }else{
        res.status(404).send({message: "Pet não encontrado"})
    }
}