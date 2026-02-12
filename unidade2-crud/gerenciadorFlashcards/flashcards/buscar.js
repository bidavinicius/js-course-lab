import { prompt, exibirMenu, flashcards, baralhos } from "../app.js";
let menu

export function buscarFlashcards() {
  console.clear();
  console.log("Deseja buscar por:\n1-Pergunta\n2-Baralho");
  let opcao = prompt("> ");
  switch (opcao) {
    case "1":
      console.log("Digite a pergunta: ");
      let pergunta = prompt("> ");
      pergunta = pergunta.toLowerCase()
      console.clear()
      flashcards.forEach((flashcard) => {
        if (pergunta == flashcard.pergunta) {
          console.log(
            `--------------------\nPergunta: ${flashcard.pergunta}\nResposta: ${flashcard.resposta}\nID: ${flashcard.idFlashcard}\nID do baralho: ${flashcard.idBaralho}\n--------------------`
          );
        }
      });
      console.log("Pressione enter para voltar ao menu");
      menu = prompt("");
      switch (opcao) {
        default:
          exibirMenu();
          break;
      }
    case "2":
      console.log("Digite o ID do baralho: ");
      let idBusca = prompt("> ");

      const baralhoIndex = baralhos.findIndex(
        (baralho) => baralho.id == idBusca
      );
      if (baralhoIndex === -1) {
        console.clear()
        console.log("Baralho não encontrado.");
        console.log("\nPressione Enter para voltar ao menu");
        menu = prompt("");
        switch (menu) {
          default:
            exibirMenu();
            break;
        }
      }
      console.clear()
      flashcards.forEach((flashcard) => {
        if (flashcard.idBaralho == idBusca) {
          console.log(
            `--------------------\nPergunta: ${flashcard.pergunta}\nResposta: ${flashcard.resposta}\nID: ${flashcard.idFlashcard}\nID do baralho: ${flashcard.idBaralho}\n--------------------`
          );
        }
      });
      console.log("Pressione enter para voltar ao menu");
      menu = prompt("");
      switch (opcao) {
        default:
          exibirMenu();
          break;
      } 
  }
}
