import { exibirMenu } from './Contatos.js';
import { contatos } from './Contatos.js';
import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });

export function listarContatos() {
if (contatos.length === 0) {
console.log("Nenhum contato cadastrado."); // Saída de dados
} else {
contatos.forEach((contato) => {
console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone:
${contato.telefone}, Email: ${contato.email}`); // Saída de dados
});
}

exibirMenu();
}

