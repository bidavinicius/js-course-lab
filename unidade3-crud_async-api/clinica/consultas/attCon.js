import { consultas } from "./postCon.js";

export function attCon(req,res){
    const idAtt = parseInt(req.params.id)
    const index = consultas.findIndex(consulta => consulta.id === idAtt)
    if(index == -1){
        return res.status(404).send("Nenhuma consulta com esse ID foi encontrada")
    }

    let consultaOriginal = consultas[index]
    let novaConsulta = req.body

    const consultaAtualizada = {
        ...consultaOriginal,
        ...novaConsulta
    }

    consultas[index] = consultaAtualizada
    res.status(200).send("Consulta atualizada com sucesso")
}