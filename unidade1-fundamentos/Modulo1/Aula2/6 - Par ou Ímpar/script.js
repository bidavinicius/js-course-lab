let numeroInput = prompt("Digite um número inteiro: ")
let numero = parseInt(numeroInput)

if(numero % 2 === 0){
    alert("O número " + numero + " é PAR")
    console.log(`O número ${numero} foi classificado como PAR.`)
}else{
    alert("O número " + numero + " é ÍMPAR")
    console.log(`O número ${numero} foi classificado como ÍMPAR`)
}

console.log("Fim da análise de paridade.")