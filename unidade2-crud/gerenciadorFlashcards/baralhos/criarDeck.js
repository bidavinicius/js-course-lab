import { prompt, exibirMenu, baralhos } from "../app.js";

let quantBaralho = 0;

export function criarBaralho() {
  console.clear();
  console.log("Qual o nome do baralho?");
  let nome = prompt("> ");
  nome = nome.toLowerCase();
  baralhos.forEach((baralho) => {
    if (nome == baralho.nome) {
      console.log("Um baralho com esse nome já existe, tente novamente.");
      console.log("Pressione Enter para retornar");
      let menu = prompt("");
      switch (menu) {
        default:
          criarBaralho();
          break;
      }
    }
  });
  quantBaralho++;
  const baralho = {
    nome: nome,
    id: quantBaralho,
  };

  baralhos.push(baralho);

  console.log("Baralho criado com sucesso!");
  console.log("Deseja criar mais algum baralho?\n1- Sim\nOutro- Sair");
  let opcao = prompt("");
  switch (opcao) {
    case "1":
      criarBaralho();
      break;
    default:
      exibirMenu();
      break;
  }
}
