const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

rl.question('Por favor, digite seu nome: ', (nome) => {
    rl.question('Agora, digite sua idade: ', (idade) => {
        rl.question('Voce possui CNH? (sim/nao): ', (respostaCNH) => {

            //Cria o objeto usuario com as informações coletadas
            //Converte a idade para numero com parseInt
            //Converte a resposta da CNH para um booleano (true/false)
            const usuario = {
                nome: nome,
                idade: parseInt(idade),
                possuiCNH: (respostaCNH.toLowerCase() === 'sim' || respostaCNH.toLowerCase() === 's')
            }

            //Exibe as informações formatadas acessando as propriedades do objeto
            console.log('\n--- Ficha do usuario ---')
            console.log(`Nome: ${usuario.nome}`)
            console.log(`Idade: ${usuario.idade} anos`)

            //Usando um operador ternário para exibir Sim ou Não baseado no booleano
            const statusCNH = usuario.possuiCNH ? 'Sim' : 'Nao'
            console.log(`Possui CNH? ${statusCNH}`)
            console.log('------------------------')

            //Exibe o objeto inteiro so de meme
            console.log('\nObjeto completo:')
            console.log(usuario)

            rl.close()
        })
    })
})