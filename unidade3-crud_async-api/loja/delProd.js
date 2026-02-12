import { produtos } from "./postProd.js";

export function delProd(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = produtos.findIndex(produto => produto.id === idDeletar)
    if(index == -1){
        return res.status(404).send("Nenhum produto com esse id foi encontrado")
    }
    produtos.splice(index,1)
    res.status(200).send("Produto deletado com sucesso")
}