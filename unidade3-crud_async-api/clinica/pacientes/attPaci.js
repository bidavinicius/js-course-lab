import { pacientes } from "./postPaci.js";

export function attPaci(req,res){
    let idAtualizacao = parseInt(req.params.id)
    const index = pacientes.findIndex(paciente => paciente.id === idAtualizacao)
    if(index === -1){
        res.status(404).send("Nenhum paciente com esse ID foi encontrado")
    }
    let pacienteOriginal = pacientes[index]
    let novoPaciente = req.body

    const pacienteAtualizado = {
        ...pacienteOriginal,
        ...novoPaciente
    }

    pacientes[index] = pacienteAtualizado
    res.status(200).send("Paciente atualizado!")
}