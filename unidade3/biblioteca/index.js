import express from "express";
import mongoose from "mongoose";
import fs from "fs";
import { router } from "./caminhos.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const port = 3000;
mongoose.connect(process.env.MONGODB_URI
)

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB")
})

mongoose.connection?.on('error', (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})

app.use(express.json());
app.use(router);

export const jsonLivros = "./json/livros.json";
export const jsonEstudantes = "./json/estudantes.json";
export const jsonAlugueis = "./json/alugueis.json"


function lerDados(caminhoArquivo) {
  if (!fs.existsSync(caminhoArquivo)) {
    return [];
  }
  const dadosString = fs.readFileSync(caminhoArquivo, "utf-8");
  if (!dadosString) {
    return [];
  }
  return JSON.parse(dadosString);
}

export function lerDadosLivros() {
  return lerDados(jsonLivros);
}

export function lerDadosEstudantes() {
  return lerDados(jsonEstudantes);
}

export function lerDadosAlugueis() {
  return lerDados(jsonAlugueis);
}

function salvarDados(caminhoArquivo, dados) {
  const dadosJson = JSON.stringify(dados, null, 2);
  fs.writeFileSync(caminhoArquivo, dadosJson);
}

export function salvarDadosLivros(dados) {
  salvarDados(jsonLivros, dados);
}

export function salvarDadosEstudantes(dados) {
  salvarDados(jsonEstudantes, dados);
}

export function salvarDadosAlugueis(dados) {
    salvarDados(jsonAlugueis, dados);
  }

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});