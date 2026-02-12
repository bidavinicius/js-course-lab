import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config(); 

export const Role = {
    USER: 'USER',
    ADMIN: 'ADMIN'
}

export function authUser(...allowedRoles) {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send("Token invalido")
    
    let token = authHeader

    if(authHeader.startsWith('bearer ')){
        token = authHeader.slice('bearer '.length).trim()
    }

    try {
        const secret = process.env.JWT_SECRET 
        if (!secret) {
            console.log('JWT secret não configurado');
            return res.status(500).send("Erro ao criar");
        }
        console.log('Verificando token:', token);
        const decoded = jwt.verify(token, secret);
        console.log('Token decodificado com sucesso:', decoded);
        req.user = decoded;

        const hasPermission = decoded.role?.some((r) => allowedRoles.includes(r))
        if(!hasPermission) return res.status(401).send("Acesso negado.")

        next();
    } catch (error) {
        console.log('Erro ao verificar token:', error.message);
        return res.status(401).send("Token inválido")
    }
    }
    
}