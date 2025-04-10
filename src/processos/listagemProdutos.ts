import Produto from "../modelos/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }

    listar(): void {
        console.log(`\n----- Lista de produtos -----`)
        this.produtos.forEach(produto => {
            console.log(`ID: ${produto.id}`)
            console.log(`Nome: ${produto.nome}`)
            console.log(`Preço: ${produto.preco}`)
            console.log(`---------------------------------`)
        })
    }
}