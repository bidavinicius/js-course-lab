import express from 'express'
const app = express()
const router = express.Router();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

import { postDeck } from './baralhos/postDeck.js';
import { postFlash } from './flashcards/postFlash.js';
import { listDeck } from './baralhos/listDeck.js';
import { listFlash } from './flashcards/listFlash.js';
import { attDeck } from './baralhos/attDeck.js'
import { attFlash } from './flashcards/attFlash.js';
import { delDeck } from './baralhos/delDeck.js';
import { delFlash } from './flashcards/delFlash.js';
import { buscaFlash } from './flashcards/listFlash.js';

router.post("/baralhos", postDeck)
router.post("/flashcards", postFlash)
router.get("/baralhos", listDeck)
router.get("/flashcards", listFlash)
router.patch("/baralhos/:id", attDeck)
router.patch("/flashcards/:id", attFlash)
router.delete("/baralhos/:id", delDeck)
router.delete("/flashcards/:id", delFlash)
router.get("/flashcards/busca", buscaFlash)

router.get("/",(req,res) => {
    res.send("API funcionando")
})
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http:///localhost:${port}`)
})