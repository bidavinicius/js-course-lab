import { prompt, exibirMenu, baralhos, flashcards } from "../app.js";
let menu

export function excluirBaralho() {
  console.clear();
  console.log("Digite o ID do baralho que deseja excluir");
  const id = prompt("> ");
  const baralhoIndex = baralhos.findIndex((baralho) => baralho.id == id);
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

  const baralho = baralhos[baralhoIndex];

  console.log(
    `Excluindo o baralho:\n Nome: ${baralho.nome}\n ID: ${baralho.id}`
  );

  console.log(
    "\nCerteza que deseja excluir esse baralho? Os flashcards associados a ele serão excluidos também.\n1- Sim\nOutro- Voltar"
  );
  let opcao = prompt("> ");
  switch (opcao) {
    case "1":
      console.clear()
      let flashcardsRestantes = flashcards.filter(flashcard => flashcard.idBaralho !== baralho.id);
      flashcards.length = 0
      flashcards.push(...flashcardsRestantes)
      baralhos.splice(baralhoIndex, 1);
      console.log("Baralho excluído com sucesso!");
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
