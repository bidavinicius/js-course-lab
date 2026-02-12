const div = require('./div')
const soma = require('./soma')
const sub = require('./sub')
const mult = require('./mult')
const usuario = require('./usuario')

usuario()


function realizarOperacao(num1, num2, operacao){
    let resultado

    switch(operacao){
        case"+":
            resultado = soma(num1,num2)
            break
        case"-":
            resultado = sub(num1,num2)
            break
        case"*":
            resultado = mult(num1,num2)
            break
        case"/":
            resultado = div(num1,num2)
            break
        default:
            console.log("Operação inválida.")
            return undefined
    }

    console.log(resultado)
}


realizarOperacao()