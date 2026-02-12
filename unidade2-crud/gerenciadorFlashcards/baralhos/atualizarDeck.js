import { prompt, exibirMenu, baralhos } from "../app.js";
let menu

export function atualizarBaralho() {
  console.clear();
  console.log("Digite o ID do baralho que deseja editar.");
  const id = prompt("> ");
  const baralhoIndex = baralhos.findIndex((baralho) => baralho.id == id);
  const baralho = baralhos[baralhoIndex];

  console.log(
    `Atualizando o baralho de nome: ${baralho.nome}, e ID: ${baralho.id}`
  );

  console.log("Digite o novo nome do baralho");
  let novoNome = prompt("> ");
  novoNome = novoNome.toLowerCase();
  baralhos.forEach((baralho) => {
    if (novoNome == baralho.nome) {
      console.log("Um baralho com esse nome já existe, tente novamente.");
      console.log("Pressione Enter para retornar");
      menu = prompt("");
      switch (menu) {
        default:
          atualizarBaralho();
          break;
      }
    }
  });
  baralho.nome = novoNome;

  baralhos[baralhoIndex] = baralho;

  console.log("Novo nome salvo!");
  console.log("Pressione Enter para retornar ao menu");
  menu = prompt("");
  switch (menu) {
    default:
      exibirMenu();
      break;
  }
}
