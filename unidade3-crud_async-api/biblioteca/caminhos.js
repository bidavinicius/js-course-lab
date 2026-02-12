import express from "express"
// livros
import { adicionarLivros } from "./modularizacao/livros/postLivro.js";
import { deletarLivros } from "./modularizacao/livros/delLivro.js";
import { atualizarLivro } from "./modularizacao/livros/attLivro.js";
import { listarLivros } from "./modularizacao/livros/listLivro.js";
// estudantes
import { adicionarEstudantes } from "./modularizacao/estudantes/postEstud.js";
import { deletarEstudantes } from "./modularizacao/estudantes/delEstud.js";
import { listarEstudantes } from "./modularizacao/estudantes/listEstud.js";
import { atualizarEstudantes } from "./modularizacao/estudantes/attEstud.js";
// alugueis
import { adicionarAluguel } from "./modularizacao/alugueis/postAluguel.js";
import { devolucaoLivro } from "./modularizacao/alugueis/postDevol.js";
import { deletarAlugueis } from "./modularizacao/alugueis/removeAluguel.js";
import { listarAlugueis } from "./modularizacao/alugueis/listAluguel.js";
import { editarAluguel } from "./modularizacao/alugueis/attAluguel.js";

export const router = express.Router();

router.delete("/aluguel/:idAluguel", deletarAlugueis)
router.post("/aluguel", adicionarAluguel)
router.put("/aluguel/devolucao/:idAluguel", devolucaoLivro)
router.get("/aluguel", listarAlugueis)
router.put("/aluguel/:idAluguel", editarAluguel)

router.get("/estudantes", listarEstudantes)
router.delete("/estudantes/:id", deletarEstudantes)
router.post("/estudantes", adicionarEstudantes)
router.put("/estudantes/:id", atualizarEstudantes)

router.get("/livros", listarLivros)
router.post("/livros", adicionarLivros)
router.delete("/livros/:id", deletarLivros)
router.put("/livros/:id", atualizarLivro)
