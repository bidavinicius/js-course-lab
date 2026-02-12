const prompt = require('prompt-sync')()

function lerEntrada(mensagem){
    return prompt(mensagem)
}

function usuario(num1,num2,operacao){
    num1 = prompt("Insira o primeiro número: ")
    operacao = prompt("Digite a operação (+,-,*,/): ")
    num2 = prompt("Insira o segundo número: ")

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    return num1, num2, operacao
}

module.exports = usuario