export let consultas = []
let id = 0

export function postCon(req,res){
    const { data, idM, idP, desc } = req.body
    if(!data||!idM||!idP||!desc){
        return res.status(400).send("Você precisa cadastrar todas as informações da consulta.")
    }
    id++
    const consulta = {
        id,
        data,
        idM,
        idP,
        desc
    }

    consultas.push(consulta)
    res.status(201).send("Consulta cadastrada com sucesso!")
}