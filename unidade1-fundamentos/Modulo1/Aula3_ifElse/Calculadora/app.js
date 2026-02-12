const { parse } = require('path')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let resultado
rl.setPrompt("Digite o primero número:\n")
rl.prompt()


/*
VERSÃO IF ELSE

rl.on('line', (num) => {
    num = parseInt(num)
    console.log("Agora, o segundo: ")
    rl.on('line', (num2) => {
        num2 = parseInt(num2)
        console.log("Agora digite a operação, 1 para adição, 2 para subtração, 3 para multiplicação e 4 para divisão!")
        rl.on('line', (operador) => {
            if(operador == 1){
                resultado = num+num2
                console.log(resultado)
                process.exit()
            }            
            else if(operador == 2){
                resultado = num-num2
                console.log(resultado)
                process.exit()
            } 
            else if(operador == 3){
                resultado = num*num2
                console.log(resultado)
                process.exit()
            } 
            else if(operador == 4){
                resultado = num/num2
                console.log(resultado)
                process.exit()
            } 
            else{
                console.log("Operação inválida")
                process.exit()
            } 
        })
    })
})
*/


//VERSÃO SWITCH

rl.on('line', (num) => {
    num = parseInt(num)
    console.log("Agora, o segundo: ")
    rl.on('line', (num2) => {
        num2 = parseInt(num2)
        console.log("Agora digite a operação, 1 para adição, 2 para subtração, 3 para multiplicação e 4 para divisão!")
        rl.on('line', (operador) => {
            operador = parseInt(operador)
            switch(operador){
                case 1:
                    resultado = num+num2
                    console.log(resultado)
                    process.exit()
                    break
                case 2:
                    resultado = num-num2
                    console.log(resultado)
                    process.exit()
                    break
                case 3:
                    resultado = num*num2
                    console.log(resultado)
                    process.exit()
                    break
                case 4:
                    resultado = num/num2
                    console.log(resultado)
                    process.exit()
                    break
                default:
                    console.log("Operação inválida")
            }
        })
    })
})


/*
VERSÃO GEMINI

let num1 = null;
let num2 = null;
let operador = null;

rl.setPrompt('Digite o primeiro número:\n');
rl.prompt();

// 3. Um único listener para controlar todo o fluxo
rl.on('line', (input) => {
    // Verifica qual informação está faltando
    if (num1 === null) {
        num1 = parseInt(input);
        rl.setPrompt('Digite o segundo número:\n');
        rl.prompt();
    } else if (num2 === null) {
        num2 = parseInt(input);
        rl.setPrompt('Digite a operação (1:+, 2:-, 3:*, 4:/):\n');
        rl.prompt();
    } else {
        operador = parseInt(input);
        let resultado;

        switch (operador) {
            case 1:
                resultado = num1 + num2;
                break;
            case 2:
                resultado = num1 - num2;
                break;
            case 3:
                resultado = num1 * num2;
                break;
            case 4:
                if (num2 === 0) {
                    console.log("Erro: Divisão por zero não é permitida.");
                    rl.close();
                    return;
                }
                resultado = num1 / num2;
                break;
            default:
                console.log("Operação inválida!");
                rl.close(); // Fecha a interface em caso de erro
                return; // Sai da função
        }

        console.log(`O resultado é: ${resultado}\nCalculadora Encerrada.`);
        rl.close(); // Fecha a interface e encerra o programa
    }
});
*/
