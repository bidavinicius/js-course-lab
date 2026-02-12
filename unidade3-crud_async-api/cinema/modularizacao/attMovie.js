import { Movie } from "../movie_schema.js";

const updateMovie = async(id, title, director, year, genre) => {
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(
            id,
            {title, director, year, genre},
            {new: true, runValidators: true}
        )
        return updatedMovie
    } catch (error){
        console.error("Erro ao atualizar o filme", error.message)
        throw error
    }
  }
  
  export async function attMovie(req,res){
    const {id} = req.params
      const {title, director, year, genre} = req.body
      const updatedMovie = await updateMovie(id, title, director, year, genre)
      if(updatedMovie){
          res.status(200).send({message: "Filme atualizado com sucesso!", movie: updatedMovie})
      } else {
          res.status(404).send({message: "Filme não encontrado"})
      }
  }