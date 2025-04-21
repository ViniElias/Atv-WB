import Entrada from "../io/entrada"
import Cliente from "../modelos/cliente"
import Produto from "../modelos/produto"
import Servico from "../modelos/servico"

export default class Consumo {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public consumir(): void {
        let cpf = this.entrada.receberTexto('Digite o CPF do cliente: ')
        let clienteConsumo = this.clientes.find(c => c.getCpf.getValor === cpf)

        if (!clienteConsumo) {
            console.log('Cliente não encontrado.')
        } else {
            let execucao = true

            while (execucao) {
                console.log(`O que será consumido?\n`)
                console.log(`1 - Produto\n`)
                console.log(`2 - Serviço\n`)
                console.log(`0 - Sair\n`)

                let entrada = new Entrada()
                let opcao = entrada.receberTexto('Escolha uma opcao: ')

                switch (opcao) {
                    case "1":
                        let idProduto = entrada.receberTexto('Digite o ID do produto: ')
                        let produtoConsumido = this.produtos.find(p => p.getId === idProduto)

                        if (!produtoConsumido) {
                            console.log('Produto não encontrado.')
                        } else {
                            clienteConsumo.getProdutosConsumidos.push(produtoConsumido)
                            produtoConsumido.vendas = produtoConsumido.vendas + 1
                        }
                        break
                    case "2":
                        let idServico = entrada.receberTexto('Digite o ID do Servico: ')
                        let servicoConsumido = this.servicos.find(s => s.getId === idServico)
                        
                        if (!servicoConsumido) {
                            console.log('Produto não encontrado.')
                        } else {
                            clienteConsumo.getServicosConsumidos.push(servicoConsumido)
                            servicoConsumido.vendas = servicoConsumido.vendas + 1
                        }
                        break
                    case "0":
                        execucao = false
                        break
                    default:
                        console.log("Opção inválida.")
                        break
                }
            }
        }
    }
}