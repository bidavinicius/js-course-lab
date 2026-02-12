import { Produto } from "../schemas/product_schema.js"

const createProduct = async (nome, quantidade) => {
    try{
        const newProduct = new Produto ({nome, quantidade})
        return await newProduct.save()
    } catch (error) {
        console.error("Erro ao criar o produto", error.message)
        throw error
    }
} 



export async function postProduct(req,res){
    const {nome, quantidade} = req.body
    const newProduct = await createProduct(nome, quantidade)

    res.status(201).send({message: "Produto criado com sucesso", produto: newProduct})
}