import Cliente from "../modelos/cliente"
import Listagem from "./listagem"

export default class ListagemMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\n----- Produtos mais consumidos -----`)

        const consumoProdutos: Map<string, number> = new Map()

        for (let cliente of this.clientes) {
            for (let produto of cliente.getProdutosConsumidos) {
                const nome = produto.nome
                consumoProdutos.set(nome, (consumoProdutos.get(nome) || 0) + 1)
            }
        }

        const produtosOrdenados = Array.from(consumoProdutos.entries()).sort((a, b) => b[1] - a[1])

        if (produtosOrdenados.length === 0) {
            console.log("Nenhum produto consumido.")
        } else {
            for (let [nome, quantidade] of produtosOrdenados) {
                console.log(`- ${nome}: ${quantidade}x`)
            }
        }

        console.log(`\n----- Serviços mais consumidos -----`)

        const consumoServicos: Map<string, number> = new Map()

        for (let cliente of this.clientes) {
            for (let servico of cliente.getServicosConsumidos) {
                const nome = servico.nome
                consumoServicos.set(nome, (consumoServicos.get(nome) || 0) + 1)
            }
        }

        const servicosOrdenados = Array.from(consumoServicos.entries()).sort((a, b) => b[1] - a[1])

        if (servicosOrdenados.length === 0) {
            console.log("Nenhum serviço consumido.")
        } else {
            for (let [nome, quantidade] of servicosOrdenados) {
                console.log(`- ${nome}: ${quantidade}x`)
            }
        }
    }
}