import PromptSync from "prompt-sync"
import { contatos } from "./Contatos.js";
import { exibirMenu } from "./Contatos.js";
export const prompt = PromptSync({ sigint: true });

export function adicionarContato() {
    console.log("Digite o nome do contato: ") //Saída de dados
    let nome = prompt("> "); // Entrada de dados
    console.log("Digite o telefone do contato: ") //Saída de dados
    let telefone = prompt("> "); // Entrada de dados
    if (isNaN(telefone) || telefone.length != 11) {
        console.log("Telefone inválido. Deve conter apenas números."); // Saída de dados
        adicionarContato()
    }
    console.log("Digite o email do contato: ") // Saída de dados
    let email = prompt("> "); // Entrada de dados
    const id = Date.now();

    let contato = {
        id: id,
        nome: nome,
        telefone: telefone,
        email: email
}
    
    contatos.push(contato);

console.clear();
console.log("Contato adicionado com sucesso!");
exibirMenu();
}