const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const opcoes = ["Pedra", "Papel", "Tesoura"]
let escolhaComputador = ""
let escolhaUsuario = ""
let resultado = ""

switch(Math.floor(Math.random() * 2)){
    case 0:
        escolhaComputador = "Pedra"
        escolhaComputador = escolhaComputador.toLowerCase()
        break
    case 1:
        escolhaComputador = "Papel"
        escolhaComputador = escolhaComputador.toLowerCase()
        break
    case 2:
        escolhaComputador = "Tesoura"
        escolhaComputador = escolhaComputador.toLowerCase()
        break
}

console.log(escolhaComputador)



rl.question("Pedra, papel ou tesoura?", (escolhaUsuario) => {
        escolhaUsuario = escolhaUsuario.toLowerCase()
        if(escolhaUsuario == escolhaComputador){
            resultado = "Empate"
            console.log(resultado)
        }else if((escolhaUsuario == "pedra" && escolhaComputador == "tesoura") || (escolhaUsuario == "tesoura" && escolhaComputador == "papel") || (escolhaUsuario == "papel" && escolhaComputador == "pedra")){
            resultado = "Você venceu!"
            console.log(resultado)
        }else{
            resultado = "Você perdeu."
            console.log(resultado)
        }
})