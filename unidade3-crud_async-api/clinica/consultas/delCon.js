import { consultas } from "./postCon.js";

export function delCon(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = consultas.findIndex(consulta => consulta.id === idDeletar)
    if(index == -1){
        return res.status(404).send("Nenhuma consulta com esse id foi encontrada")
    }
    consultas.splice(index,1)
    res.status(200).send("Consulta deletada com sucesso")
}