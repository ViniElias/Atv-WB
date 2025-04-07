import Cliente from "../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    listar(): void {
        console.log(`\nLista de clientes:\n`)
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome}`)
            console.log(`Nome Social: ${cliente.nomeSocial}`)
            console.log(`CPF: ${cliente.getCpf.getValor}`)
            console.log(`---------------------------------`)
        })
    }
}