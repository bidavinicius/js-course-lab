import { Item } from "../item_schema.js";

const createItem = async (nome, preco, diaSemana) => {
    try{
        const newItem = new Item({nome, preco, diaSemana})
        return await newItem.save() 
    }catch(error){
        console.error("Erro ao criar item", error.message)
        throw error
    }
}

export async function postItem(req,res){
    const {nome, preco, diaSemana} = req.body
    const newItem = await createItem(nome, preco, diaSemana)

    res.status(201).send({message: "Item criado com sucesso", item: newItem})
}