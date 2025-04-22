import Cliente from "../modelos/cliente"
import Listagem from "./listagem"

export default class ListagemMenorQuantidade extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        console.log(`\n----- 10 clientes que menos consumiram produtos ou serviços -----`)

        const clientesOrdenados = this.clientes
            .map(cliente => ({
                cliente,
                totalConsumo: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            }))
            .sort((a, b) => a.totalConsumo - b.totalConsumo)

        const top10Menos = clientesOrdenados.slice(0, 10)

        top10Menos.forEach(({ cliente, totalConsumo }, index) => {
            console.log(`${index + 1}. ${cliente.nomeSocial} - Total de itens consumidos: ${totalConsumo}`)
        })
    }
}