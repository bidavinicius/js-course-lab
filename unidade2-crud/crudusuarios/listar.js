import { prompt, exibirMenu, usuarios } from "./app.js";

export function listarUsuarios() {
    console.clear()
    if (usuarios.length === 0) {
    console.log("Nenhum usuario cadastrado."); 
    } else {
    usuarios.forEach((usuario) => {
    console.log(`ID: ${usuario.id} || Nome: ${usuario.nome} || Telefone: ${usuario.telefones} || Email: ${usuario.email}`); 
    });
    }
    console.log("\nPressione Enter para voltar ao menu");
    let menu = prompt("")
    switch(menu){
        default:
            exibirMenu()
            break
    }
}