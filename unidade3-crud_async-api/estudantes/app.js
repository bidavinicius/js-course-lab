const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

let id = 0
let estudantes = []

app.get('/estudantes', (req, res) => {
    res.status(200).json(estudantes)
})

app.post('/estudantes', (req, res) => {
    const {nome, matricula, curso, ano} = req.body
    if(!nome || !matricula || !curso || !ano){
        return res.status(400).send("Você deve inserir todos os dados do estudante")
    }
    id++
    const estudante = {
        id,
        nome,
        matricula,
        curso,
        ano
    }

    estudantes.push(estudante)
    res.status(201).send("Estudante cadastrado.")
})

app.patch('/estudantes/:id', (req, res) => {
    let idAtualizacao = parseInt(req.params.id)
    const indice = estudantes.findIndex(estudante => estudante.id === idAtualizacao)
    if(indice == -1){
        return res.status(404).send("Estudante não encontrado com o ID fornecido.")
    }
    let estudanteOriginal = estudantes[indice]
    let novoEstudante = req.body

    const estudanteAtualizado = {
        ...estudanteOriginal,
        ...novoEstudante
    }

    estudantes[indice] = estudanteAtualizado
    res.status(200).send("Estudante atualizado!")
})

app.delete('/estudantes/:id', (req, res) => {
    const idDeletar = parseInt(req.params.id)
    const indice = estudantes.findIndex(estudante => estudante.id === idDeletar)
    if (indice === -1) {
        return res.status(404).send("Estudante não encontrado com o ID fornecido.")
    }
    estudantes.splice(indice, 1)
    res.status(200).send("Estudante deletado com sucesso!")
})

app.get('/estudantes/busca', (req, res) => {
    const { nome, matricula, ano, curso } = req.query;

    let resultado = estudantes;

    if (nome) {
        resultado = resultado.filter(estudante => 
            estudante.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (matricula) {
        resultado = resultado.filter(estudante => 
            estudante.matricula.toLowerCase().includes(matricula.toLowerCase())
        );
    }

    if (ano) {
        resultado = resultado.filter(estudante => 
            estudante.ano.toLowerCase().includes(ano.toLowerCase())
        );
    }

    if (curso) {
        resultado = resultado.filter(estudante => 
            estudante.curso.toLowerCase().includes(curso.toLowerCase())
        );
    }
    
    res.status(200).json(resultado);
})

app.listen(port,() => {
    console.log(`Servidor rodando na porta: ${port}`)
})