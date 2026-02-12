import { Movie } from "../movie_schema.js";

const createMovie = async (title, director, year, genre) => {
    try {
        const newMovie = new Movie ({title, director, year, genre})
        return await newMovie.save()
    } catch (error){
        console.error("Erro ao adicionar o filme", error.message)
        throw error
    }
}

export async function postMovie(req,res){
    const {title, director, year, genre} = req.body
    const newMovie = await createMovie(title, director, year, genre)

    res.status(201).send({message: "Filme adicionado com sucesso!", movie: newMovie})
}