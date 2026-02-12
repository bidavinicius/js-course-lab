const readline = require('readline');
//Importa o modulo readline do node.js para lidar com a entrada de dados do terminal


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Cria uma interface de leitura e escrita

rl.question('Por favor, digite seu nome: ', (nome) => {
    //Pergunta o nome e, dentro da primeira pergunta, faz a segunda
    rl.question('Agora, digite sua idade: ', (idade) => {
        console.log(`\nOla, ${nome}! Voce tem ${idade} anos. Seja bem-vindo(a)!`);
        //Exibe a mensagem com as informacoes coletadas
        rl.close();
        //Fecha a interface
    });
});
