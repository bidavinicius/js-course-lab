import express from "express"

import { addLivros } from "./modularizacao/livros/postLivro.js";
import { listLivros } from "./modularizacao/livros/listLivro.js";
import { delLivro } from "./modularizacao/livros/delLivro.js"
import { attLivro } from "./modularizacao/livros/attLivro.js";

import { addEstud } from "./modularizacao/estudantes/postEstud.js";
import { listEstud } from "./modularizacao/estudantes/listEstud.js";
import { delEstud } from "./modularizacao/estudantes/delEstud.js";
import { attEstud } from "./modularizacao/estudantes/attEstud.js";

export const router = express.Router();

// router.delete("/aluguel/:idAluguel", deletarAlugueis)
// router.post("/aluguel", adicionarAluguel)
// router.put("/aluguel/devolucao/:idAluguel", devolucaoLivro)
// router.put("/aluguel/:idAluguel", editarAluguel)

router.get("/estudantes", listEstud)
router.delete("/estudantes/:id", delEstud)
router.post("/estudantes", addEstud)
router.put("/estudantes/:id", attEstud)

router.get("/livros", listLivros)
router.post("/livros", addLivros)
router.delete("/livros/:id", delLivro)
router.put("/livros/:id", attLivro)
