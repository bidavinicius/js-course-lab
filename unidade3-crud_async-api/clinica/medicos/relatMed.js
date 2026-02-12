import { consultas } from "../consultas/postCon.js";
import { pacientes } from "../pacientes/postPaci.js";

export function conPaciMed(req,res){
    const idMedico = parseInt(req.params.idM)

    const consultasMed = consultas.filter(consulta => consulta.idM === idMedico);

    if (consultasMed.length === 0) {
        return res.status(404).send("Nenhuma consulta encontrada para o médico com esse ID");
    }

    const idsPaci = consultasMed.map(consulta => consulta.idP)
    const pacientesAtendidos = pacientes.filter(paciente => idsPaci.includes(paciente.id));

    res.status(200).json(pacientesAtendidos);
}
