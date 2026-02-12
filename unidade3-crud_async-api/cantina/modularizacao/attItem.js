import { Item } from "../item_schema.js";

const updateItem = async (id, nome, preco, diaSemana) => {
    try{
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            {nome, preco, diaSemana},
            {new: true, runValidators: true}
        )
        return updatedItem
    }catch(error){
        console.error("Erro ao atualizar o item", error.message)
        throw error
    }
}

export async function attItem(req,res){
    const {id} = req.params
    const {nome, preco, diaSemana} = req.body
    const updatedItem = await updateItem(id, nome, preco, diaSemana)
    if(updatedItem){
        res.status(200).send({message: "Item atualizado com sucesso!", item: updatedItem})
    }else{
        res.status(404).send({message: "Item não encontrado"})
    }
}