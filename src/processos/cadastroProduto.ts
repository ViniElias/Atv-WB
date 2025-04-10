import Entrada from "../io/entrada"
import Produto from "../modelos/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    cadastrar(): void {
        console.log(`\n----- Cadastro de produto -----`)
        let id = this.entrada.receberTexto(`ID: `)
        let nome = this.entrada.receberTexto(`Nome: `)
        let preco = this.entrada.receberTexto(`Preço: `)

        let produto = new Produto(id, nome, preco)

        this.produtos.push(produto)
        console.log(`\nProduto cadastrado.`)
    }
}