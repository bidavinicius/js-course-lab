import { Pet } from "../pet_schema.js";

const addPet = async (nome, especie, idade, status) => {
    try {
        const newPet = new Pet ({nome, especie, idade, status})
        return await newPet.save()
    } catch (error){
        console.error("Erro ao adicionar o pet", error.message)
        throw error
    }
}

export async function postPet(req,res){
    const {nome, especie, idade, status} = req.body
    const newPet = await addPet(nome, especie, idade, status)

    res.status(201).send({message: "Pet adicionado com sucesso!", pet: newPet})
}