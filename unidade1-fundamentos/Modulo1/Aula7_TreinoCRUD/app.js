const { stat } = require("fs");

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const jogos = [];

function exibirMenu() {
  console.log("1. Cadastrar Jogo");
  console.log("2. Listar Jogos");
  console.log("3. Apagar Jogo");
  console.log("4. Editar Jogo");
  console.log("5. Pesquisar Jogo");
  console.log("6. Sair");
}

function mostrarMenu() {
  console.log("\n" + "=".repeat(30));
  exibirMenu();
  console.log("=".repeat(30));

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        cadastrarJogo();
        break;
      case "2":
        listarJogos();
        break;
      case "3":
        apagarJogo();
        break;
      case "4":
        editarJogo();
        break;
      case "5":
        filtrarJogo();
        break;
      case "6":
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        mostrarMenu();
    }
  });
}

function cadastrarJogo() {
  rl.question("Qual o nome do jogo? ", (nome) => {
    rl.question("Qual o ano do jogo? ", (ano) => {
      if (isNaN(ano)) {
        console.log("Ano inválido.");
        return cadastrarJogo();
      }
      rl.question(
        "Qual o status do jogo? (Lista de desejo, Completo, Jogando...) ",
        (status) => {
          rl.question(
            "Qual a nota do jogo? (Caso não tenha jogado, deixe em branco) ",
            (nota) => {
              const jogo = {
                nome,
                ano,
                status,
                nota,
              };

              jogos.push(jogo);
              console.log("Jogo cadastrado! Deseja cadastrar mais um? (s/n)");

              rl.question("", (resposta) => {
                resposta.toLowerCase() === "s"
                  ? cadastrarJogo()
                  : mostrarMenu();
              });
            }
          );
        }
      );
    });
  });
}

function listarJogos() {
  if (jogos.length === 0) {
    console.log("Nenhum jogo cadastrado");
  } else {
    console.log("\n ---Lista de Jogos---");
    jogos.forEach((jogo, index) => {
      console.log(
        `${index + 1}. Nome: ${jogo.nome} | Ano: ${jogo.ano} | Status: ${
          jogo.status
        } | Nota: ${jogo.nota}`
      );
    });
  }

  console.log("\nPressione enter para voltar ao menu.");
  rl.question("", mostrarMenu);
}

function apagarJogo() {
  if (jogos.length === 0) {
    console.log("Nenhum jogo cadastrado para apagar.");
    console.log("\nPressione Enter para voltar ao menu");
    return rl.question("", mostrarMenu);
  }

  console.log("Jogos cadastrados: ");
  jogos.forEach((jogo, index) => {
    console.log(
      `${index + 1}. Nome: ${jogo.nome} | Ano: ${jogo.ano} | Status: ${
        jogo.status
      } | Nota: ${jogo.nota}`
    );
  });

  rl.question("\nDigite o número do jogo que deseja apagar: ", (num) => {
    const index = parseInt(num, 10) - 1;

    if (index >= 0 && index < jogos.length) {
      const [removido] = jogos.splice(index, 1);
      console.log(`Jogo ${removido.nome} foi removido com sucesso!`);
    } else {
      console.log("Número inválido!");
    }

    console.log("\nPressione Enter para voltar ao menu");
    rl.question("", mostrarMenu);
  });
}

function editarJogo() {
  if (jogos.length === 0) {
    console.log("Nenhum jogo cadastrado para editar.");
    console.log("\nPressione Enter para voltar ao menu");
    return rl.question("", mostrarMenu);
  }

  console.log("\n---Jogos Cadastrados---");
  jogos.forEach((jogo, index) => {
    console.log(
      `${index + 1}. Nome: ${jogo.nome} | Ano: ${jogo.ano} | Status: ${
        jogo.status
      } | Nota: ${jogo.nota}`
    );
  });

  rl.question("\nDigite o número do jogo que deseja editar: ", (num) => {
    const index = parseInt(num, 10) - 1;

    if (index < 0 || index >= jogos.length) {
      console.log("Número inválido!");
      console.log("\nPressione Enter para voltar ao menu");
      return rl.question("", mostrarMenu);
    }

    rl.question("Digite o novo nome do jogo: ", (nome) => {
      rl.question("Digite o novo ano do jogo: ", (ano) => {
        if (isNaN(ano)) {
          console.log("Ano inválido.");
          return editarJogo();
        }
        rl.question("Digite o novo status do jogo: ", (status) => {
          rl.question("Digite a nova nota do jogo: ", (nota) => {
            jogos[index] = {
              nome,
              ano,
              status,
              nota,
            };

            console.log("Jogo editado com sucesso!");
            console.log("\nPressione Enter para voltar ao menu");
            rl.question("", mostrarMenu);
          });
        });
      });
    });
  });
}

//Atividade 4 - filtro

function menuFiltro() {
  console.log("1. Nome");
  console.log("2. Ano");
  console.log("3. Status");
  console.log("4. Nota");
}

function filtrarJogo() {
  console.log("===============");
  menuFiltro();
  console.log("===============");

  rl.question("Escolha uma opção: ", (opção) => {
    switch (opção) {
      case "1":
        rl.question("Qual o nome do jogo que deseja procurar?", (filtro) => {
          const busca = jogos.filter((jogos) => jogos.nome == filtro);
          console.log(busca);
          console.log("\nPressione Enter para voltar ao menu");
          return rl.question("", mostrarMenu);
        });
        break;
      case "2":
        rl.question("Qual o ano do jogo que deseja procurar?", (filtro) => {
          const busca = jogos.filter((jogos) => jogos.ano == filtro);
          console.log(busca);
          console.log("\nPressione Enter para voltar ao menu");
          return rl.question("", mostrarMenu);
        });
        break;
      case "3":
        rl.question("Qual o status do jogo que deseja procurar?", (filtro) => {
          const busca = jogos.filter((jogos) => jogos.status == filtro);
          console.log(busca);
          console.log("\nPressione Enter para voltar ao menu");
          return rl.question("", mostrarMenu);
        });
        break;
      case "4":
        rl.question("Qual a nota do jogo que deseja procurar?", (filtro) => {
          const busca = jogos.filter((jogos) => jogos.nota == filtro);
          console.log(busca);
          console.log("\nPressione Enter para voltar ao menu");
          return rl.question("", mostrarMenu);
        });
        break;
      default:
        console.log("Opção inválida. ");
        return filtrarJogo();
        break;
    }
  });
}

mostrarMenu();
