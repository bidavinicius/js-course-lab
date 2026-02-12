import express from 'express'
const app = express()
const router = express.Router();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

import { postPaci } from './pacientes/postPaci.js';
import { buscaPaci, listPaci } from './pacientes/listPaci.js';
import { delPaci } from './pacientes/delPaci.js';
import { attPaci } from './pacientes/attPaci.js';
import { postMed } from './medicos/postMed.js';
import { buscaMed, listMed } from './medicos/listMed.js'
import { delMed } from './medicos/delMed.js';
import { attMed } from './medicos/attMed.js'
import { postCon } from './consultas/postCon.js';
import { buscaCon, listCon } from './consultas/listCon.js';
import { delCon } from './consultas/delCon.js';
import { attCon } from './consultas/attCon.js';
import { conMed } from './consultas/relatCon.js';
import { conPaciMed } from './medicos/relatMed.js';
import { conMedPaci } from './pacientes/relatPaci.js';

router.post("/pacientes", postPaci)
router.get("/pacientes", listPaci)
router.delete("/pacientes/:id", delPaci)
router.patch("/pacientes/:id", attPaci)
router.post("/medicos", postMed)
router.get("/medicos", listMed)
router.delete("/medicos/:id", delMed)
router.patch("/medicos/:id", attMed)
router.post("/consultas", postCon)
router.get("/consultas", listCon)
router.delete("/consultas/:id", delCon)
router.patch("/consultas/:id", attCon)
router.get("/pacientes/buscar", buscaPaci)
router.get("/medicos/buscar", buscaMed)
router.get("/consultas/buscar", buscaCon)
router.get("/relatorios/consultas/medico/:idM", conMed)
router.get("/relatorios/pacientes/medico/:idM", conPaciMed)
router.get("/relatorios/medicos/paciente/:idP", conMedPaci)

router.get("/",(req,res) => {
    res.send("API funcionando")
})
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http:///localhost:${port}`)
})