import { produtos } from "./postProd.js";

export function attProd(req, res){
    const idAtt = parseInt(req.params.id)
    const index = produtos.findIndex(produto => produto.id === idAtt)
    if(index == -1){
        return res.status(404).send("Nenhum produto com esse ID foi encontrado")
    }

    let produtoOriginal = produtos[index]
    let novoProduto = req.body

    const produtoAtualizado = {
        ...produtoOriginal,
        ...novoProduto
    }

    produtos[index] = produtoAtualizado
    res.status(200).send("Produto atualizado com sucesso")
}