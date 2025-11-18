import { Item } from "../item_schema.js";

const deleteItem = async(id) => {
    try{
        return await Item.findByIdAndDelete(id)
    }catch(error){
        console.error("Erro ao deletar o item", error.message)
        throw error
    }
}

export async function delItem(req,res){
    const {id} = req.params
    const deletedItem = await deleteItem(id)
    if(deletedItem){
        res.status(200).send({message: "Item deletado com sucesso", item: deletedItem})
    }else{
        res.status(404).send({message: "Item não encontrado."})
    }
}