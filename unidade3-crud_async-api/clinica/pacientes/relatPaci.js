import { medicos } from "../medicos/postMed.js";
import { consultas } from "../consultas/postCon.js";

export function conMedPaci(req,res){
    const idPaciente = parseInt(req.params.idP)

    const consultasPaci = consultas.filter(consulta => consulta.idP === idPaciente);

    if (consultasPaci.length === 0) {
        return res.status(404).send("Nenhuma consulta encontrada para o paciente com esse ID");
    }

    const idsMed = consultasPaci.map(consulta => consulta.idM)
    const medicosAtenderam = medicos.filter(medico => idsMed.includes(medico.id));

    res.status(200).json(medicosAtenderam);
}