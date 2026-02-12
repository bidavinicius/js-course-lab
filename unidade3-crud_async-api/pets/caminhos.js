import express from "express"
export const router = express.Router();

import { postPet } from "./modulacao/postPet.js";
import { listPets } from "./modulacao/listPet.js";
import { attPet } from "./modulacao/attPet.js";
import { delPet } from "./modulacao/delPet.js";

router.post("/pets", postPet)
router.get("/pets", listPets)
router.put("/pets", attPet)
router.delete("/pets", delPet)