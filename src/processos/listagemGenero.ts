import Cliente from "../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemGenero extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    listar(): void {
        console.log(`\n----- Lista de clientes por gênero -----`)
        this.clientes.sort((a, b) => a.genero.localeCompare(b.genero))
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`Gênero: ${cliente.genero}`)
            console.log(`CPF: ${cliente.getCpf.getValor}`)
            console.log(`Produtos: ${cliente.getProdutosConsumidos.map(p => p.nome).join(", ")}`)
            console.log(`Serviços: ${cliente.getServicosConsumidos.map(s => s.nome).join(", ")}`)
            console.log(`---------------------------------`)
        })
    }
}