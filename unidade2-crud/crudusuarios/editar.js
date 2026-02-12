import { prompt, exibirMenu, usuarios, novosTelefones } from "./app.js";


export function editarUsuario() {
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
    `Atualizando o usuário: ID: ${usuario.id} || Nome: ${usuario.nome} || Telefones: ${usuario.telefones} ||Email: ${usuario.email}`
  );
  console.log(
    "Confirmar a seleção de usuário:\n1- Sim, prosseguir.\nOutro- Voltar"
  );
  let opcao = prompt("");
  opcao = parseInt(opcao);
  switch (opcao) {
    case 1:
      const novoNome = prompt(
        "Digite o novo nome (deixe em branco para manter o atual): "
      );
      const novoEmail = prompt(
        "Digite o novo email (deixe em branco para manter o atual): "
      );
      usuarios.forEach((usuario) => {
        if (novoEmail == usuario.email) {
          console.log("\nEmail já cadastrado.");
          console.log("Pressione Enter para retornar");
          let menu = prompt("");
          switch (menu) {
            default:
              editarUsuario();
              break;
          }
        }
      });
      editarTelefones(novoNome, novoEmail, usuario, usuarioIndex, []);
  }
}

function editarTelefones(novoNome, novoEmail, usuario, usuarioIndex, novosTelefones) {
  console.log("Deseja editar o(s) telefone(s)?\n1-Sim\nOutro-Não");
  let opcao = prompt("> ");
  switch (opcao) {
    case "1":
      console.log("Digite o(s) telefone(s) do usuário");
      let novoTelefone = prompt("> ");
      if (isNaN(novoTelefone)) {
        console.log("Telefone inválido, deve conter apenas números");
        editarTelefones(novoNome, novoEmail, usuario, usuarioIndex, []);
      } else {
        novosTelefones.push(novoTelefone);
        console.log("Número adicionado!");
        console.log("Deseja adicionar mais algum número?\n1-Sim\nOutro-Não");
        let opcao = prompt("> ");
        switch (opcao) {
          case "1":
            console.clear();
            editarTelefones(novoNome, novoEmail, usuario, usuarioIndex, novosTelefones);
            break;
          default:
            if (novoNome) {
              usuario.nome = novoNome;
            }
            if (novoEmail) {
              usuario.email = novoEmail;
            }
            usuario.telefones = novosTelefones;
            usuarios[usuarioIndex] = usuario;
            console.clear();

            console.log("Usuário atualizado com sucesso!");
            console.log("\nPressione Enter para voltar ao menu");
            let menu = prompt("");
            switch (menu) {
              default:
                exibirMenu();
                break;
            }
        }
      }
      break;
    default:
      if (novoNome) {
        usuario.nome = novoNome;
      }
      if (novoEmail) {
        usuario.email = novoEmail;
      }
      usuarios[usuarioIndex] = usuario;
      console.clear();

      console.log("Usuário atualizado com sucesso!");
      console.log("\nPressione Enter para voltar ao menu");
      let menu = prompt("");
      switch (menu) {
        default:
          exibirMenu();
          break;
      }
  }
}
