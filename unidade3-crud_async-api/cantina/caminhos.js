import express from "express"
export const router = express.Router();

import { postItem } from "./modularizacao/postItem.js";
import { listItems } from "./modularizacao/listItem.js";
import { delItem } from "./modularizacao/delItem.js";
import { attItem } from "./modularizacao/attItem.js"

router.post("/itens", postItem)
router.get("/itens", listItems)
router.delete("/itens/:id", delItem)
router.put("/itens/:id", attItem)