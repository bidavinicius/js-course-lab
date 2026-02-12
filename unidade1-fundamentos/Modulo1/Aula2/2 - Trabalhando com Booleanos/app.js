const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Por favor, digite seu nome: ', (nome) => {
    rl.question('Agora, digite sua idade: ', (idade) => {
        //Terceira pergunta
        rl.question('Voce possui CNH? (sim/nao): ', (respostaCNH) => {
            let temCNH = false
            //Deixar como false por padrao

            //Verificar a respota do usuario de forma flexivel
            if(respostaCNH.toLowerCase() === 'sim' || respostaCNH.toLowerCase() === 's'){
                temCNH = true
            }

            //Exibe a mensagem principal
            console.log(`\nOla, ${nome}! Voce tem ${idade} anos`)

            //Usa a estrutura condicional if/else com a variavel booleana
            if(temCNH){
                console.log('Parabens, voce pode dirigir!')
            }else{
                console.log('Que pena, voce ainda nao pode dirigir')
            }
            rl.close()
        })
    })
})
