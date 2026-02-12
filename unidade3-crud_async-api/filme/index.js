import express from 'express'
import { postFilme } from './postFilme.js';
import { buscaFilme, listFilme } from './listFilme.js';
import { attFilme } from './attFilme.js';
import { delFilme } from './delFilme.js';
const app = express()
const router = express.Router();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

router.post("/filmes", postFilme)
router.get("/filmes", listFilme)
router.patch("/filmes/:id", attFilme)
router.delete("/filmes/:id", delFilme)
router.get("/filmes/busca", buscaFilme)

app.listen(port, () => {
    console.log(`Example app listening at http:///localhost:${port}`)
})