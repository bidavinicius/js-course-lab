import { medicos } from "./postMed.js";

export function delMed(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = medicos.findIndex(medico => medico.id === idDeletar)
    if(index == -1){
        res.status(404).send("Nenhum médico com esse ID foi encontrado")
    } 
    medicos.splice(index, 1)
    res.status(200).send("Médico deletado com sucesso!")
}