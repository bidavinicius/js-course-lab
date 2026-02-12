import { candidatos, prompt, numsCandidato } from "./app.js";

export let brancos = 0;
export let nulos = 0;

export function registroVotos() {
  let voterID = Math.floor(Date.now() / 60000);
  console.log("Bem-vindo ao sistema de votos!\nDigite seu nome:");
  let nome = prompt("> ");

  console.log("Digite em quem deseja votar: ");
  console.log(numsCandidato);
  let voto = prompt("> ");

  const indexCandidato = candidatos.findIndex(
    (candidato) => candidato.numsCandidato === voto
  );

  const addVoto = candidatos[indexCandidato]
  addVoto.votos++

  console.log(candidatos)
}
