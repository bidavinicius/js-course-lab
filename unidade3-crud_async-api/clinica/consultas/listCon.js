import { consultas } from "./postCon.js";

export function listCon(req,res){
    res.status(200).json(consultas)
}

export function buscaCon(req,res){
    const {idP, idM, idC, data, descricao} = req.query

    let resultado = consultas

    if (data) {
        resultado = resultado.filter(consulta => 
            consulta.data.toLowerCase().includes(data.toLowerCase())
        );
    }

    if (idP) {
        resultado = resultado.filter(consulta => 
            consulta.idP.toLowerCase().includes(idP.toLowerCase())
        );
    }

    if (idM) {
        resultado = resultado.filter(consulta => 
            consulta.idM.toLowerCase().includes(idM.toLowerCase())
        );
    }

    if (descricao) {
        resultado = resultado.filter(consulta => 
            consulta.descricao.toLowerCase().includes(descricao.toLowerCase())
        );
    }

    if (id) {
        resultado = resultado.filter(consulta => 
            consulta.id.toLowerCase().includes(id.toLowerCase())
        );
    }

    res.status(200).json(resultado)
}