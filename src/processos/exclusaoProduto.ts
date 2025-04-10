import Entrada from "../io/entrada";
import Produto from "../modelos/produto";
import Exclusao from "./exclusao";

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    excluir(): void {
        console.log(`\n----- Exclusão do produto -----`)
        let id = this.entrada.receberTexto(`Digite o ID do produto a ser excluído: `)
        const indice = this.produtos.findIndex(c => c.getId === id)

        if(indice !== -1) {
            this.produtos.splice(indice, 1)
            console.log(`\nExclusão concluída.`)
        } else {
            console.log(`\nID não encontrado.`)
        }
    }
}