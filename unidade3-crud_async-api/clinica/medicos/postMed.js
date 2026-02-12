let id = 0
export let medicos = []

export function postMed(req,res){
    const {nome, especialidade} = req.body
    if(!nome||!especialidade){
        return res.status(400).send("Você deve inserir todos os dados dos médicos")
    }
    id++
    const medico = {
        id,
        nome,
        especialidade
    }
    medicos.push(medico)
    res.status(201).send("Médico cadastrado com sucesso.")
}