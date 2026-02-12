import { pacientes } from "./postPaci.js";

export function listPaci(req,res){
    res.status(200).json(pacientes)
}

export function buscaPaci(req,res){
    const {id, nome, birthdate} = req.query

    let resultado = pacientes

    if (nome) {
        resultado = resultado.filter(paciente => 
            paciente.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (id) {
        resultado = resultado.filter(paciente => 
            paciente.id.toLowerCase().includes(id.toLowerCase())
        );
    }

    if (birthdate) {
        resultado = resultado.filter(paciente => 
            paciente.birthdate.toLowerCase().includes(birthdate.toLowerCase())
        );
    }

    res.status(200).json(resultado)
}