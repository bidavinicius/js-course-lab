import { Student } from "../schemas/student_schema.js";

const createStudent = async (name, tuition, year, major) => {
  try {
      const newStudent = new Student({name, tuition, year, major})
      return await newStudent.save()
  } catch (error) {
      console.error("Erro ao criar o estudante", error.message)
      throw error
  }
}

export async function addEstud(req,res){
    const {name, tuition, year, major} = req.body
    const newStudent = await createStudent(name, tuition, year, major)

    res.status(201).send({message: "Estudante criado com sucesso!", student: newStudent})
}