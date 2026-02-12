Aluno: Vinicius Ribas Bida

LISTA DE CONTATOS

Atividade da Lions em que fazemos um crud para criar uma lista de contatos. Além do código, há 3 perguntas descritivas que serão respondidas no arquivo readme.

Pergunta 1 - Análise de código:

Na parte 1, há o seguinte código

==========================================

let contatos = [
{ id: 1, nome: 'Alice', telefone: '1234-5678', email:
'alice@example.com' },
{ id: 2, nome: 'Bob', telefone: '8765-4321', email:
'bob@example.com' },
{ id: 3, nome: 'Carol', telefone: '5678-1234', email:
'carol@example.com' }
];
function listarContatos() {
contatos.forEach(contato => {
console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:
${contato.telefone}, Email: ${contato.email}`);
});
}
listarContatos();

===========================================


Nesse código, é criado, primeiramente, o array "contatos", onde são salvos os objetos denominados "contato", que salva as variáveis ID, Nome, Telefone e Email.

Em seguida, vem a função listarContatos, que, como o nome diz, lista o array contatos, imprimindo na tela os objetos salvos dentro dele e as váriaveis contidas dentro de tal objeto.

O "contatos.forEach" faz o código rodar para cada objeto do array. O console.log imprime exatamente todos os dados do objeto. 
Por fim, a função é chamada.

------------------------------------------------------

Pergunta 2 - Entradas e Saídas:

Essa pergunta é respondida dentro do próprio código. 

-------------------------------------------------------

Pergunta 3 - Variáveis declaradas:

Por arquivo (as repetidas não são descritas mais de uma vez):

1. Contatos.js: 
>Const prompt - constante criada para usar o prompt-sync;
>
>Let contatos - array que salva os objetos "contato"
>
>Let opcao - variável para o switchcase, entrada de dados do usuário, salva   a opção que a pessoa escolher para chamar a função


2. adicionar.js:
> Let nome - variável que salva o nome do contato escolhido pela pessoa
>
> Let telefone - variável que salva o número de telefone do contato escolhido pela pessoa
>
> Let email - variável que salva o email do contato escolhido pela pessoa
>
> Const id - constante que salva o ID do contato que será criado
> 
> Let contato - objeto que salva as variáveis características do contato, citadas acima (nome, telefone, email e id)

3. listar.js:
> Nenhuma variável nova declarada

4. atualizar.js:
> Const id - constante que chama um prompt para o usuário digitar o ID do contato a ser editado. Depois é comparada com o ID de dentro do objeto "contato" para possibilitar a edição.
>
> Const contatoIndex - constante que faz a comparação do ID digitado e do ID do contato. Salva o index do contato a ser editado.
>
> Const contato - define de vez o contato a ser editado utilizando o index achado na constante contatoIndex, facilitando o código mais para frente.
>
> Const novoNome - constante que chama um prompt para o usuário editar o nome (ou deixar em branco para não editar)
>
> Const novoTelefone - constante que chama um prompt para o usuário editar o telefone (ou deixar em branco para não editar)
>
> Const novoEmail - constante que chama um prompt para o usuário editar o email (ou deixar em branco para não editar)

5. deletar.js:
> Const id - constante que chama um prompt para o usuário digitar o ID do contato a ser deletado. Depois é comparada com o ID de dentro do objeto "contato" para possibilitar a deleção.
>
> Const contatoIndex - constante que tem a mesma função que teve no atualizar.js, acha o índice do contato selecionado
>
> Const contato - igual no atualizar.js, salva qual o contato a ser editado, facilitando o código.
>
> Const confirmacao - chama um prompt que confirma a decisão do usuário. 

----------------------------------------------------------------------------
