const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let vogais = ["a", "e", "i", "o", "u"]
let vogaisexistentes = []
let frasevogais = "AEIOUaeiou"

function contadorvogais(frase){
    let quantidade = 0
    frase = frase.toLowerCase()
    for(i=0;i<frase.length;i++){
        if(vogais.includes(frase[i])){
            if(vogaisexistentes.includes(frase[i])){
            } else {
                vogaisexistentes.push(frase[i])
                quantidade++
            }
        }
    }
    return quantidade
}

console.log(`${contadorvogais(frasevogais)}`)