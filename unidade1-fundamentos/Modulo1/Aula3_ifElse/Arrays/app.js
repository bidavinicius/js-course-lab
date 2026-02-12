//CRUD - Create, read, update, delete

const minhaMesa = ["Veiga", "Deyverson", "Paraizo", "Bida"]

console.log(`Meu nome é ${minhaMesa[3]}, meus colegas são: ${minhaMesa[0]}, ${minhaMesa[1]} e ${minhaMesa[2]}`)


minhaMesa.push("Piquerez")
minhaMesa.shift()
minhaMesa.splice(0,1)

console.log(minhaMesa)

const { parse } = require('path')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let notas = []
let media 

rl.setPrompt("Digite a primeira nota: ")
rl.prompt()

rl.on("line", (nota1) => {
    if(nota1>10 || nota1<0){
        console.log("Nota inválida, digite novamente: ")
    } else{
        nota1 = parseFloat(nota1)
        notas.push(nota1)
        rl.question("Agora digite a segunda nota: ", (nota2) => {
            if(nota2>10 || nota2<0){
                console.log("Nota inválida, comece novamente.\nDigite a primeira nota: ")
                notas.shift()
            } else{
                nota2= parseFloat(nota2)
                notas.push(nota2)
                media = (notas[0] + notas[1])/2
                console.log(notas)
                console.log(`A média ficou em: ${media}`)
                process.exit()
        }
    })
    }
})

