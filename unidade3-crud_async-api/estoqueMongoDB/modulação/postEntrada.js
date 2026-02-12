import { Produto } from "../schemas/product_schema.js";
import { Movimento } from "../schemas/movement_schema.js";

const Entrada = async (quantidade) => {
    try{
        const updatedQuantity = await Produto.findByIdAndUpdate(
            id,
            {quantidade},
            {new: true, runValidators: true}
        )
        return updatedQuantity
    } catch (error){
        console.error("Erro ao atualizar a quantidade de produto", error.message)
        throw error
    }
} 