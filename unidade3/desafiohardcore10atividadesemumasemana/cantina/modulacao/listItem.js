import { Item } from "../item_schema.js"

const getItem = async() => {
    try{
        return await Item.find()
    }
    catch(error){
        console.error("Erro ao encontrar o item", error.message)
        throw error
    }
}

export async function listItems(req,res){
    const items = await getItem()
    res.status(200).send(items)
}