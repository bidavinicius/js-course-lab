import { prompt, exibirMenu, flashcards } from "../app.js";
let menu

export function atualizarFlashcards() {
  console.clear();
  console.log("Digite o ID do flashcard que deseja editar");
  const id = prompt("> ");
  const flashcardIndex = flashcards.findIndex(
    (flashcard) => flashcard.idFlashcard == id
  );
  const flashcard = flashcards[flashcardIndex];

  console.log(
    `Atualizando o flashcard:\n\nPergunta: ${flashcard.pergunta}\nResposta: ${flashcard.resposta}\nID: ${flashcard.idFlashcard}\nID do baralho ao qual ele pertence: ${flashcard.idBaralho}\n`
  );

  console.log(
    "Digite a nova pergunta do baralho: (ou deixe em branco para manter a mesma)"
  );
  let novaPergunta = prompt("> ");

  console.log(
    "\nDigite a nova resposta do baralho: (ou deixe em branco para manter a mesma)"
  );
  let novaResposta = prompt("> ");

  console.log(
    "\nCaso deseje mudar de baralho, digite o ID do baralho para o qual deseja assimilar a carta: (ou deixe em branco para manter o mesmo baralho)"
  );
  let novoBaralho = prompt("> ");

  if (novaPergunta) {
    flashcard.pergunta = novaPergunta;
  }

  if (novaResposta) {
    flashcard.resposta = novaResposta;
  }

  if (novoBaralho) {
    flashcard.idBaralho = novoBaralho;
  }

  flashcards[flashcardIndex] = flashcard;

  console.clear()
  console.log("Alterações salvas!");
  console.log("Pressione Enter para retornar ao menu");
  menu = prompt("");
  switch (menu) {
    default:
      exibirMenu();
      break;
  }
}
