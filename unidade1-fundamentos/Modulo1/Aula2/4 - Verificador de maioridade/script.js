//Solicita a idade do usuário e armazena a resposta em uma variável
//A função prompt() sempre retorna o texto (string), mesmo que o usuário digite números
let idadeInput = prompt('Por favor, digite sua idade: ')

//Converte o texto recebido para um número inteiro
//É importante fazer essa conversão para realizar cálculos e comparações numéricas
let idade = parseInt(idadeInput)

//Verifica se a idade é maior ou igual a 18
//A expressão 'idade >= 18' resulta em um valor booleano: true ou false
if(idade >= 18){
    //Se a condição for verdadeira, executa este bloco
    alert('Voce é maior de idade! Acesso permitido.')
    console.log('O usuário tem ' + idade + 'anos e é maior de idade.')
} else{
    //Se a condição for falsa, executa este bloco
    alert('Você é menor de idade! Acesso negado.')
    console.log('O usuário tem' + idade + 'anos e é menor de idade')
}

console.log('Fim da verificação.')