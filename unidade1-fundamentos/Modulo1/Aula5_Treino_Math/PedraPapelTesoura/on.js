const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const opcoes = ["Pedra", "Papel", "Tesoura"];
let escolhaComputador = "";
let escolhaUsuario = "";
let resultado = "";
let i = 0;
let vitorias = 0,
  derrotas = 0,
  empates = 0;

function computador() {
  switch (Math.floor(Math.random() * 2)) {
    case 0:
      escolhaComputador = "Pedra";
      escolhaComputador = escolhaComputador.toLowerCase();
      break;
    case 1:
      escolhaComputador = "Papel";
      escolhaComputador = escolhaComputador.toLowerCase();
      break;
    case 2:
      escolhaComputador = "Tesoura";
      escolhaComputador = escolhaComputador.toLowerCase();
      break;
  }
  console.log(escolhaComputador);
}

computador();

rl.setPrompt("Pedra, papel ou tesoura? (ou sair)\n");
rl.prompt();

rl.on("line", (escolhaUsuario) => {
  escolhaUsuario = escolhaUsuario.toLowerCase().trim();
  if (escolhaUsuario == escolhaComputador) {
    resultado = "Empate";
    console.log(resultado);
    i++;
    empates++;
    computador();
    rl.prompt();
    return;
  } else if (
    (escolhaUsuario == "pedra" && escolhaComputador == "tesoura") ||
    (escolhaUsuario == "tesoura" && escolhaComputador == "papel") ||
    (escolhaUsuario == "papel" && escolhaComputador == "pedra")
  ) {
    resultado = "Você venceu!";
    console.log(resultado);
    i++;
    vitorias++;
    computador();
    rl.prompt();
    return;
  } else if (
    (escolhaUsuario == "tesoura" && escolhaComputador == "pedra") ||
    (escolhaUsuario == "papel" && escolhaComputador == "tesoura") ||
    (escolhaUsuario == "pedra" && escolhaComputador == "papel")
  ) {
    resultado = "Você perdeu";
    console.log(resultado);
    i++;
    derrotas++;
    computador();
    rl.prompt();
    return;
  } else if (escolhaUsuario == "sair") {
    console.log(
      `Você jogou ${i} jogos, venceu ${vitorias}, perdeu ${derrotas} e empatou ${empates}.`
    );
    process.exit();
  } else {
    resultado = "Entrada inválida.";
    console.log(resultado);
    computador();
    rl.prompt();
    return;
  }
});
