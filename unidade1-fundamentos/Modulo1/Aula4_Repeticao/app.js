const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
rl.question("Digite o número que você deseja ver a tabuada: ", (num) => {
    num = parseInt(num)
    for(i=0; i<101; i++){
        console.log(`${i} x ${num} = ${num*i}`)
    }
    process.exit()
})
*/

let somaPares = 0, mediaPares, totalPares = 0, somaImpares = 0, mediaImpares, totalImpares = 0

for(i=0; i<1000; i++){
    if(i % 2 == 0){
        somaPares = somaPares + i
        totalPares++
    }else{
        somaImpares = somaImpares + i
        totalImpares++
    }
}

mediaImpares = somaImpares/totalImpares
mediaPares = somaPares/totalPares

console.log(`A quantidade de números pares foi: ${totalPares} e a soma deles é: ${somaPares}\n`)
console.log(`A quantidade de números ímpares foi: ${totalImpares} e a soma deles é: ${somaImpares}\n`)
console.log(`A media de números pares ficou em: ${mediaPares} e a média de números ímpares ficou em: ${mediaImpares}`)
process.exit()

