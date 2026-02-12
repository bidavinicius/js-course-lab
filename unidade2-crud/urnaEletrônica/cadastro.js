import { prompt, candidatos, exibirMenu } from "./app.js";

export function cadastroCandidato(numsCandidato){
    console.log("Bem-vindo ao sistema de cadastro de candidatos!\nPor favor insira o nome completo:\n")
    let nome = prompt("> ")
    console.log("Agora, insira o número de votação.\n")
    let numCandidato = prompt("> ")
    numCandidato = parseInt(numCandidato)
    if(numsCandidato.includes(numCandidato)){
        console.log("Este número já está em uso, tente novamente.")
        cadastroCandidato()
    } else{
        numsCandidato.push(numCandidato)
        //console.log(numsCandidato)
    }

    // numsCandidato.forEach(( numCandidatos) => {
    //     console.log("Teste2")

    //     if(numCandidato == numCandidatos){
    //         console.log("Este número já está em uso, tente outro.")
    //         cadastroCandidato()
    //     } else {
    //         numsCandidato.push(numCandidato)
    //         console.log(numsCandidato)
    //     }
    // })

 
    console.log("Agora insira o partido (nome completo)\n")
    let partido = prompt("> ")
    console.log("E agora, a sigla do partido\n")
    let sigla = prompt("> ")
    let id = candidatos.length + 1
    let votos = 0

    let candidato = {
        nome: nome,
        numCandidato: numCandidato,
        partido: partido,
        sigla: sigla,
        id: id,
        votos: votos
    }
    
    candidatos.push(candidato)
    console.log("Candidato cadastrado!\nDeseja adicionar mais algum?\n1- Sim\nOutro- Não\n")
    let opcao = prompt("> ")
    switch(opcao){
        case "1":
            cadastroCandidato(numsCandidato)
            break
        default:
            exibirMenu()
            break
    }
}