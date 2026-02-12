import express from 'express'
import { postProd } from './postProd.js';
import { buscaProd, listProd } from './listProd.js';
import { attProd } from './attProd.js';
import { delProd } from './delProd.js';
const app = express()
const router = express.Router();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

router.post("/produtos", postProd)
router.get("/produtos", listProd)
router.patch("/produtos/:id", attProd)
router.delete("/produtos/:id", delProd)
router.get("/produtos/busca", buscaProd)

app.listen(port, () => {
    console.log(`Example app listening at http:///localhost:${port}`)
})