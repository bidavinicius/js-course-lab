const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let caracteres = "abcdefghijklmnopqrstuvwxyzçABCDEFGHIJKLMNOPQRSTUVWXYZÇ!@#$%¨&*()1234567890"
let senha = ""

rl.question("Qual o tamanho da senha?\n", (comprimentoSenha) => {
    let tamanho = parseInt(comprimentoSenha)
    
    for(let i = 0; i<tamanho; i++){
        const indice = Math.floor(Math.random() * caracteres.length)
        senha += caracteres.charAt(indice)
    }
    console.log("A senha gerada foi: " + senha)
    process.exit()
})

