import { Movie } from "../movie_schema.js";

const getMovies = async() => {
    try{
        return await Movie.find()
    }catch(error){
        console.error("Erro ao encontrar os filmes", error.message)
        throw error
    }
}

export async function listMovie(req, res) {
    const movies = await getMovies()
    res.status(200).send(movies)
}