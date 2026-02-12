import { prompt, exibirMenu, flashcards } from "../app.js";
let menu

export function excluirFlashcards(){
    console.clear()
    console.log("Digite o ID do flashcard que deseja excluir:")
    const id = prompt("> ")
    const fcIndex = flashcards.findIndex((flashcard) => flashcard.idFlashcard == id);
    if (fcIndex === -1) {
      console.log("Flashcard não encontrado.");
      console.log("\nPressione Enter para voltar ao menu");
      menu = prompt("");
      switch (menu) {
        default:
          exibirMenu();
          break;
      }
    }

    const flashcard = flashcards[fcIndex]

    console.log(
        `Excluindo o flashcard:\nPergunta: ${flashcard.pergunta} || Resposta: ${flashcard.resposta} || ID: ${flashcard.idFlashcard} || ID do baralho ao qual ele pertence: ${flashcard.idBaralho}`);
    
      console.log(
        "Certeza que deseja excluir esse flashcard?\n1- Sim\nOutro- Voltar"
      );
      let opcao = prompt("> ");
      switch (opcao) {
        case "1":
          flashcards.splice(fcIndex, 1)
          console.log("Flashcard excluído com sucesso!");
          console.log("Pressione enter para voltar ao menu");
          menu = prompt("");
          switch (menu) {
            default:
              exibirMenu();
              break;
          }
        default:
          exibirMenu();
          break;
      }
}