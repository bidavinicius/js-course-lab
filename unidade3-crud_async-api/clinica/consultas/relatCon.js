import { consultas } from "./postCon.js";

export function conMed(req,res){
    const idMedico = parseInt(req.params.idM)

    const consultasMed = consultas.filter(consulta => consulta.idM === idMedico);

    if (consultasMed.length === 0) {
        return res.status(404).send("Nenhuma consulta encontrada para o médico com esse ID");
    }

    res.status(200).json(consultasMed);
}
