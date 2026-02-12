import { prompt, exibirMenu, flashcards, baralhos } from "../app.js";

let menu

export function listarFlashcards() {
  console.clear();
  console.log("Deseja listar por baralho ou todos?\n1- Por baralho\n2- Todos")
  let opcao = prompt("> ")
  switch(opcao){
    case "1":
      console.clear()
      console.log("Digite o ID do baralho que deseja ver os flashcards")
      let idBusca = prompt("> ")
      const baralhoIndex = baralhos.findIndex((baralho) => baralho.id == idBusca);
      if (baralhoIndex === -1) {
        console.log("Baralho não encontrado.");
        console.log("\nPressione Enter para voltar ao menu");
        menu = prompt("");
        switch (menu) {
          default:
            exibirMenu();
            break;
        }
      }
      const baralho = baralhos[baralhoIndex];
      console.log(`Listando os flashcards do baralho: ${baralho.nome}`)
      flashcards.forEach((flashcard) => {
        if(flashcard.idBaralho == idBusca){
          console.log(`Pergunta: ${flashcard.pergunta} || Resposta: ${flashcard.resposta} || ID: ${flashcard.idFlashcard} || ID do baralho ao qual ele pertence: ${flashcard.idBaralho}`);
        }
      })
      console.log("\nPressione enter para voltar ao menu.");
      menu = prompt("");
      switch (menu) {
        default:
          exibirMenu();
          break;
      }
      break
    case "2":
      console.clear()
      flashcards.forEach((flashcard) => {
        console.log(`Pergunta: ${flashcard.pergunta} || Resposta: ${flashcard.resposta} || ID: ${flashcard.idFlashcard} || ID do baralho ao qual ele pertence: ${flashcard.idBaralho}`);
      });
      console.log("\nPressione enter para voltar ao menu.");
      menu = prompt("");
      switch (menu) {
        default:
          exibirMenu();
          break;
      }
    default:
      console.log("Opção inválida. Tente novamente")
      console.log("Pressione enter para voltar.");
      menu = prompt("");
      switch (menu) {
        default:
          exibirMenu();
          break;
      }
  }
}
