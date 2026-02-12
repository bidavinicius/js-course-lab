const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let i=0
let rodadas = 0
let numero = Math.floor(Math.random() * 11)
console.log(numero)

rl.setPrompt('Digite um numero entre 0 e 10: ')
rl.prompt()


rl.on('line', (resposta) => {
    if(i<=9){
        if(resposta == numero){
            rodadas++
            console.log('Parabens! Voce acertou!')
            console.log(`O jogo foi concluído em ${rodadas} rodadas`)
            process.exit()
        }else{
            console.log('Tente de novo.')
            i++
            console.log('Tentativas restantes:', 10-i)
            rodadas++
        }
    }else{
        console.log(`Voce excedeu o numero de tentativas, o numero secreto era ${numero}`)
        process.exit()
    } 
})

