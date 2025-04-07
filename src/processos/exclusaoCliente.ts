import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import Exclusao from "./exclusao";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    excluir(): void {
        console.log(`Exclusão do cliente`)
        let valor = this.entrada.receberTexto(`Digite o CPF a ser excluído: `)
        const indice = this.clientes.findIndex(c => c.getCpf.getValor === valor)

        if(indice !== -1) {
            this.clientes.splice(indice, 1)
            console.log(`\nExclusão concluída.`)
        } else {
            console.log(`\nCPF não encontrado.`)
        }
    }
}