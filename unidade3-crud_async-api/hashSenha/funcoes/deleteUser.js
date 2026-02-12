import mongoose from "mongoose";
import { Register } from "../user_Schema.js";

export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const { senha } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("ID inválido")
        }
        if (!Senha) {
            return res.status(400).send("A senha é um dado obrigatório")
        }
        
        const user = await Register.findById(id);
        if (!user) {
            return res.status(404).send("Usuário não encontrado")
        }
        
        const senhaCorreta = await bcrypt.compare(senha, user.senha);
        if (!senhaCorreta) {
            return res.status(401).send("Senha inválida")
        }
        
        await Register.findByIdAndDelete(id);
        return res.status(200).send("Usuário deletado com sucesso")
    } catch (error) {
        console.error("Erro ao deletar usuário", error);
        return res.status(500).send("Erro interno.")
    }
}
