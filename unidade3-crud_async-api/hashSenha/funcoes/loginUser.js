import { Register} from "../user_Schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv"
dotenv.config()

export async function loginUser(req, res) {
  const { email, senha } = req.body;

  const user = await Register.findOne({ email });

  if (!user) return res.status(404).send("Usuário não encontrado");

  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) return res.status(401).send("Senha incorreta");

  const secret = process.env.JWT_SECRET || process.env.tokenjwt;
  if (!secret) {
      console.log('JWT secret não configurado');
      return res.status(500).send("Erro ao criar");
  }

  const token = jwt.sign({ userId: user._id, role: user.Role }, secret, {
    expiresIn: "1h",
  });

  res.json({ message: "Login realizado com sucesso!", token });
}
