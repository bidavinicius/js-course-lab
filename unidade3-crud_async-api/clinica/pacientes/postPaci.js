let id = 0
export let pacientes = []

export function postPaci(req,res){
    const { nome, birthdate} = req.body
    if(!nome||!birthdate){
        return res.status(400).send("Você deve inserir todos os dados dos pacientes")
    }
    id++
    const paciente = {
        id,
        nome,
        birthdate
    }
    pacientes.push(paciente)
    res.status(201).send("Paciente cadastrado com sucesso.")
}