import express from "express";
import mongoose from "mongoose"
import { router } from "./caminhos.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
const port = 3000;
mongoose.connect(process.env.MONGODB_URI
)

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB")
})

mongoose.connection?.on('error', (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});