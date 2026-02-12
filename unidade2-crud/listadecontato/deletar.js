import { contatos } from "./Contatos.js";  
import { exibirMenu } from "./Contatos.js";
import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

export function deletarContato() {
    const id = prompt("Digite o ID do contato que deseja deletar: "); // Entrada de dados/Saída de dados
    const contatoIndex = contatos.findIndex((contato) => contato.id == id);
    if (contatoIndex === -1) {
        console.log("Contato não encontrado."); // Saída de dados
        exibirMenu();
        deletarContato();
    }
    const contato = contatos[contatoIndex];
    console.log(`Deletando contato: ID: ${contato.id} || Nome: ${contato.nome} || Telefone: ${contato.telefone} ||Email: ${contato.email}`); // Saída de dados
    const confirmacao = prompt("Tem certeza que deseja deletar este contato? (s/n): "); // Entrada de dados/Saída de dados
    if (confirmacao.toLowerCase() === 's') {
        contatos.splice(contatoIndex, 1);
        console.clear();
        console.log("Contato deletado com sucesso!"); // Saída de dados
    } else {
        console.log("Operação cancelada."); // Saída de dados
    }
    exibirMenu();
}