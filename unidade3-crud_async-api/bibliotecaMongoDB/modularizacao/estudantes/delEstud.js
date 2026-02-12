import { Student } from "../schemas/student_schema.js";

const deleteStudent = async(id) => {
  try {
      return await Student.findByIdAndDelete(id)
  } catch (error) {
      console.error("Erro ao deletar o estudante:", error.message)
      throw error
  }
}

export async function delEstud(req,res){
    const {id} = req.params
    const deletedStudent = await deleteStudent(id)
    if(deletedStudent){
        res.status(200).send({message: "Estudante deletado com sucesso!", student: deleteStudent})
    } else {
        res.status(404).send({message: "Estudante não encontrado!"})
    }
}