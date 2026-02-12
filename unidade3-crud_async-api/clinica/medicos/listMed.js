import { medicos } from "./postMed.js";

export function listMed(req,res){
    res.status(200).json(medicos)
}

export function buscaMed(req,res){
    const {id, nome, especialidade} = req.query

    let resultado = medicos

    if (nome) {
        resultado = resultado.filter(medico => 
            medico.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (id) {
        resultado = resultado.filter(medico => 
            medico.id.toLowerCase().includes(id.toLowerCase())
        );
    }

    if (especialidade) {
        resultado = resultado.filter(medico => 
            medico.especialidade.toLowerCase().includes(especialidade.toLowerCase())
        );
    }

    res.status(200).json(resultado)
}