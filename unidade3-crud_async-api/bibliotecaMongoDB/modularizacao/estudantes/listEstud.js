import { Student } from "../schemas/student_schema.js";

const getStudents = async() => {
    try{
        return await Student.find()
    }catch(error){
        console.error("Erro ao buscar os estudantes:", error.message)
        throw error
    }
}

export async function listEstud(req, res) {
    const students = await getStudents()
    res.status(200).send(students)
}