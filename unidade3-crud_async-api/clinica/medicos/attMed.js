import { medicos } from "./postMed.js";

export function attMed(req,res){
    let idAtualizacao = parseInt(req.params.id)
    const index = medicos.findIndex(medico => medico.id === idAtualizacao)
    if(index == -1){
        res.status(404).send("Nenhum médico com esse ID foi encontrado")
    }
    let medicoOriginal = medicos[index]
    let novoMedico = req.body

    let medicoAtualizado = {
        ...medicoOriginal,
        ...novoMedico
    }

    medicos[index] = medicoAtualizado
    res.status(200).send("Médico atualizado")
}