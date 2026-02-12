import { Movie } from "../movie_schema.js"

const deleteMovie = async(id) => {
    try {
        return await Movie.findByIdAndDelete(id)
    } catch (error) {
        console.error("Erro ao deletar o filme:", error.message)
        throw error
    }
  }
  
  export async function delMovie(req,res){
      const {id} = req.params
      const deletedMovie = await deleteMovie(id)
      if(deletedMovie){
          res.status(200).send({message: "Filme deletado com sucesso!", movie: deletedMovie})
      } else {
          res.status(404).send({message: "Filme não encontrado!"})
      }
  }