import express from "express"
export const router = express.Router();

import { postMovie } from "./modularizacao/postMovie.js";
import { listMovie } from "./modularizacao/listMovie.js";
import { attMovie } from "./modularizacao/attMovie.js";
import { delMovie } from "./modularizacao/delMovie.js";

router.post('/filmes', postMovie)
router.get('/filmes', listMovie)
router.put('/filmes', attMovie)
router.delete('/filmes', delMovie)