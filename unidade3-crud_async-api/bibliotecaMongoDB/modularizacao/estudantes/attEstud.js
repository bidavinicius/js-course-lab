import { Student } from "../schemas/student_schema.js";

const updateStudent = async(id, name, tuition, year, major) => {
  try{
      const updatedStudent = await Student.findByIdAndUpdate(
          id,
          {name, tuition, year, major},
          {new: true, runValidators: true}
      )
      return updatedStudent
  } catch (error){
      console.error("Erro ao atualizar o livro", error.message)
      throw error
  }
}

export async function attEstud(req,res){
  const {id} = req.params
    const {name, tuition, year, major} = req.body
    const updatedStudent = await updateStudent(id, name, tuition, year, major)
    if(updatedStudent){
        res.status(200).send({message: "Estudante atualizado com sucesso!", student: updatedStudent})
    } else {
        res.status(404).send({message: "Estudante não encontrado"})
    }
}