import { pacientes } from "./postPaci.js";

export function delPaci(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = pacientes.findIndex(paciente => paciente.id === idDeletar)
    if(index == -1){
        res.status(404).send("Nenhum paciente com esse ID foi encontrado")
    } 
    pacientes.splice(index, 1)
    res.status(200).send("Paciente deletado com sucesso!")
}