import express from "express"
export const router = express.Router();

import { addFlash } from "./flashcards/addFlash.js";
import { listFlash } from "./flashcards/listFlash.js";
import { attFlash } from "./flashcards/attFlash.js";
import { delFlash } from "./flashcards/delFlash.js";
import { addDeck } from "./baralhos/addDeck.js";
import { listDeck } from "./baralhos/listDeck.js";
import { attDeck } from "./baralhos/attDeck.js";
import { delDeck } from "./baralhos/delDeck.js";

router.post("/flashcards", addFlash)
router.get("/flashcards", listFlash)
router.put("/flashcards", attFlash)
router.delete("/flashcards", delFlash)
router.post("/baralhos", addDeck)
router.get("/baralhos", listDeck)
router.put("/baralhos", attDeck)
router.delete("/baralhos", delDeck)
