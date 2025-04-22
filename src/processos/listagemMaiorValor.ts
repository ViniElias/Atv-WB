import Cliente from "../modelos/cliente"
import Listagem from "./listagem"

export default class ListagemMaiorValor extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\n----- 5 Clientes que mais consumiram em valor -----`)

        const clientesComValor = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos
                .reduce((soma, produto) => soma + parseFloat(produto.preco), 0)
            const totalServicos = cliente.getServicosConsumidos
                .reduce((soma, servico) => soma + parseFloat(servico.preco), 0)
            const total = totalProdutos + totalServicos

            return { cliente, total }
        })

        const top5 = clientesComValor
            .sort((a, b) => b.total - a.total)
            .slice(0, 5)

        top5.forEach(({ cliente, total }, index) => {
            console.log(`${index + 1}. ${cliente.nomeSocial} - Valor total consumido: R$ ${total.toFixed(2)}`)
        })
    }
}
