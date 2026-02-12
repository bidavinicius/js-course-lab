import { baralhos } from "./postDeck.js";

export function listDeck(req,res){
    res.status(200).json(baralhos)
}
