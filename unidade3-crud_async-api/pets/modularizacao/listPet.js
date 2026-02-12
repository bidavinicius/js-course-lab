import { Pet } from "../pet_schema.js";

const getPet = async() => {
    try{
        return await Pet.find()
    }catch(error){
        console.error("Erro ao encontrar os pets", error.message)
        throw error
    }
}

export async function listPets(req,res){
    const pets = await getPet()
    res.status(200).send(pets)
}