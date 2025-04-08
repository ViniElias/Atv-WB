import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`Atualização de cliente`)
        let valor = this.entrada.receberTexto(`Digite o CPF do cliente a ser atualizado: `)
        const cliente = this.clientes.find(c => c.getCpf.getValor === valor)

        if(cliente) {
            let novoNome = this.entrada.receberTexto(`Novo nome: `)
            let novoNomeSocial = this.entrada.receberTexto(`Novo nome social: `)

            if(novoNome.trim() !== "") {cliente.nome = novoNome}
            if(novoNomeSocial.trim() !== "") {cliente.nomeSocial = novoNomeSocial}
            
        } else {
            console.log(`\nCPF não encontrado.`)
        }
    }
}