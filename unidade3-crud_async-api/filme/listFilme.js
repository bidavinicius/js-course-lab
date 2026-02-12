import { filmes } from "./postFilme.js";

export function listFilme(req, res){
    res.status(200).json(filmes)
}

export function buscaFilme(req, res){
    const {id, titulo, diretor, genero, ano} = req.query

    let resultado = filmes

    if (titulo) {
        resultado = resultado.filter(filme => 
            filme.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    }

    if (id) {
        resultado = resultado.filter(filme => 
            filme.id.toLowerCase().includes(id.toLowerCase())
        );
    }

    if (diretor) {
        resultado = resultado.filter(filme => 
            filme.diretor.toLowerCase().includes(diretor.toLowerCase())
        );
    }

    if (ano) {
        resultado = resultado.filter(filme => 
            filme.ano.toLowerCase().includes(ano.toLowerCase())
        );
    }

    if (genero) {
        resultado = resultado.filter(filme => 
            filme.genero.toLowerCase().includes(genero.toLowerCase())
        );
    }

    res.status(200).json(resultado)
}