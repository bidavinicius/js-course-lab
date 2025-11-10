import bcrypt from "bcrypt"
import { Register } from "../user_Schema.js"

export async function addUser(req,res){
    try{
        const {nome, email, senha, Role} = req.body
        const hashSenha = await bcrypt.hash(senha, 12)

        await Register.create({
            nome,
            email,
            senha: hashSenha,
            Role
        })

        res.status(200).send("Usuário criado com sucesso")
    } catch (error){
        console.error("Erro ao adicionar usuário", error.message)
        throw error
    }
}