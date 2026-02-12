import { contatos } from "./Contatos.js";
import { exibirMenu } from "./Contatos.js";
import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

export function atualizarContato() {
    const id = prompt("Digite o ID do contato que deseja atualizar: "); // Entrada de dados/Saída de dados
    const contatoIndex = contatos.findIndex((contato) => contato.id == id);
    if (contatoIndex === -1) {
        console.log("Contato não encontrado."); // Saída de dados
        exibirMenu();
        atualizarContato();
    }
    const contato = contatos[contatoIndex];
    console.log(`Atualizando contato: ID: ${contato.id} || Nome: ${contato.nome} || Telefone: ${contato.telefone} ||Email: ${contato.email}`); // Saída de dados
    const novoNome = prompt("Digite o novo nome (deixe em branco para manter o atual): "); // Entrada de dados/Saída de dados
    const novoTelefone = prompt("Digite o novo telefone (deixe em branco para manter o atual): "); // Entrada de dados/Saída de dados
    const novoEmail = prompt("Digite o novo email (deixe em branco para manter o atual): "); // Entrada de dados/Saída de dados
    if (novoNome) {
        contato.nome = novoNome;
    }
    if (novoTelefone) {
        if (isNaN(novoTelefone) || novoTelefone.length != 11) {
            console.log("Telefone inválido. Deve conter apenas números."); // Saída de dados
            exibirMenu();
            return;
        }
        contato.telefone = novoTelefone;
    }
    if (novoEmail) {
        contato.email = novoEmail;
    }
    contatos[contatoIndex] = contato;
    console.clear();
    console.log("Contato atualizado com sucesso!"); // Saída de dados
    exibirMenu();
}