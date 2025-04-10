import Entrada from "../io/entrada";
import Produto from "../modelos/produto";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProduto extends Atualizacao {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`\n----- Atualização de produto -----`)
        let id = this.entrada.receberTexto(`Digite o ID do produto a ser atualizado: `)
        const produto = this.produtos.find(c => c.getId === id)

        if(produto) {
            let novoNome = this.entrada.receberTexto(`Novo nome: `)
            let novoPreco = this.entrada.receberTexto(`Novo preço: `)

            if(novoNome.trim() !== "") {produto.nome = novoNome}
            if(novoPreco.trim() !== "") {produto.preco = novoPreco}
            
        } else {
            console.log(`\nID não encontrado.`)
        }
    }
}