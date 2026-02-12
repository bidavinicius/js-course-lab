import { filmes } from "./postFilme.js";

export function delFilme(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = filmes.findIndex(filme => filme.id === idDeletar)
    if(index == -1){
        return res.status(404).send("Nenhum filme com esse id foi encontrado")
    }
    filmes.splice(index,1)
    res.status(200).send("Filme deletado com sucesso")
}