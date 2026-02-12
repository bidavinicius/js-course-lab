import { produtos } from "./postProd.js";

export function listProd(req, res){
    res.status(200).json(produtos)
}

export function buscaProd(req, res){
    const {id, nome, categoria, preco, estoque} = req.query

    let resultado = produtos

    if (nome) {
        resultado = resultado.filter(produto => 
            produto.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    if (id) {
        resultado = resultado.filter(produto => 
            produto.id.toLowerCase().includes(id.toLowerCase())
        );
    }

    if (categoria) {
        resultado = resultado.filter(produto => 
            produto.categoria.toLowerCase().includes(categoria.toLowerCase())
        );
    }

    if (preco) {
        resultado = resultado.filter(produto => 
            produto.preco.toLowerCase().includes(preco.toLowerCase())
        );
    }

    if (estoque) {
        resultado = resultado.filter(produto => 
            produto.estoque.toLowerCase().includes(estoque.toLowerCase())
        );
    }

    res.status(200).json(resultado)
}