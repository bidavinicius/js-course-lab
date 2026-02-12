export let produtos = []
let id = 0

export function postProd(req, res){
    const { nome, categoria, preco, estoque } = req.body
    if(!nome||!categoria||!preco||!estoque){
        res.status(400).send("Você deve inserir todas as informações do produto")
    }
    id++

    let produto = {
        id,
        nome,
        categoria,
        preco,
        estoque
    }

    produtos.push(produto)

    res.status(200).send("Produto adicionado!")
}