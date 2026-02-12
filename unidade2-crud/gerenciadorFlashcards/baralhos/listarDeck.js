import { prompt, exibirMenu, baralhos } from "../app.js";

export function listarBaralhos() {
  console.clear();
  baralhos.forEach((baralho) => {
    console.log(`Nome: ${baralho.nome} || ID: ${baralho.id}`);
  });
  console.log("\nPressione enter para voltar ao menu.");
  let opcao = prompt("");
  switch (opcao) {
    default:
      exibirMenu();
      break;
  }
}
