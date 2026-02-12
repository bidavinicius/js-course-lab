import { prompt, exibirMenu, baralhos, flashcards } from "../app.js";
import { criarBaralho } from "../baralhos/criarDeck.js";

let quantFC = 0;
let idBaralho = "";

export function criarFlashcard() {
  console.clear();
  if (baralhos.length < 1) {
    console.log(
      "Não há baralhos no sistema, crie um antes de criar um flashcard."
    );
    console.log("Pressione enter para ir ao menu de criação de baralhos.");
    let opcao = prompt("");
    switch (opcao) {
      default:
        criarBaralho();
        break;
    }
  }
  console.log("Qual a pergunta do flashcard?");
  let pergunta = prompt("> ");
  pergunta = pergunta.toLowerCase()
  console.log("Qual a resposta?");
  let resposta = prompt("> ");
  console.log("Qual o nome do baralho que deseja adicionar esse flashcard?");
  let deck = prompt("> ");
  deck = deck.toLowerCase();
  let baralhoEncontrado = false;
  baralhos.forEach((baralho) => {
    if (deck == baralho.nome) {
      idBaralho = baralho.id;
      baralhoEncontrado = true;
      quantFC++;
    }
  });

  if (!baralhoEncontrado) {
    console.log("Baralho não encontrado no sistema.");
    console.log("Pressione enter para começar novamente.");
    let opcao = prompt("");
    switch (opcao) {
      default:
        criarFlashcard();
        break;
    }
  }

  let flashcard = {
    pergunta: pergunta,
    resposta: resposta,
    idFlashcard: quantFC,
    idBaralho: idBaralho,
  };

  flashcards.push(flashcard);

  console.clear()
  console.log("Flashcard criado com sucesso!");
  console.log("Deseja criar mais algum flashcard?\n1- Sim\nOutro- Sair");
  let opcao = prompt("");
  switch (opcao) {
    case "1":
      criarFlashcard();
      break;
    default:
      exibirMenu();
      break;
  }
}
