import { prompt, exibirMenu, usuarios } from "./app.js";

export function removerUsuario() {
  const id = prompt("Digite o ID do usuário que deseja atualizar: ");
  const usuarioIndex = usuarios.findIndex((usuario) => usuario.id == id);
  if (usuarioIndex === -1) {
    console.log("Usuário não encontrado.");
    console.log("\nPressione Enter para voltar ao menu");
    let menu = prompt("");
    switch (menu) {
      default:
        exibirMenu();
        break;
    }
  }
  const usuario = usuarios[usuarioIndex];
  console.log(
    `Removendo o usuário: ID: ${usuario.id} || Nome: ${usuario.nome} || Telefones: ${usuario.telefones} ||Email: ${usuario.email}`
  );
  console.log(
    "Confirmar a seleção de usuário:\n1- Sim, prosseguir.\nOutro- Voltar"
  );
  let opcao = prompt("");
  opcao = parseInt(opcao);
  switch (opcao) {
    case 1:
      console.log(`Removendo o usuário ${usuario.nome}`);
      usuarios.splice(usuarioIndex, 1);
      console.log("Usuário deletado.");
      console.log("\nPressione Enter para voltar ao menu");
      let menu = prompt("");
      switch (menu) {
        default:
          exibirMenu();
          break;
      }
    default:
        removerUsuario()
        break
  }
}
