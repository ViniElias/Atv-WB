import Entrada from "../io/entrada"
import Cliente from "../modelos/cliente"
import CPF from "../modelos/cpf"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    cadastrar(): void {
        console.log(`\n----- Cadastro de cliente -----`)
        let nome = this.entrada.receberTexto(`Nome: `)
        let nomeSocial = this.entrada.receberTexto(`Nome social: `)
        let genero = this.entrada.receberTexto(`Gênero (M/F): `)
        let valor = this.entrada.receberTexto(`CPF: `)
        let data = this.entrada.receberTexto(`Data de emissão do CPF (dd/mm/yyyy): `)

        let dataFormatada = data.split('/')
        let ano = new Number(dataFormatada[2].valueOf()).valueOf()
        let mes = new Number(dataFormatada[1].valueOf()).valueOf()
        let dia = new Number(dataFormatada[0].valueOf()).valueOf()

        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao)
        let cliente = new Cliente(nome, nomeSocial, genero, cpf)

        if(cliente.genero == 'M' || cliente.genero == 'F') {
            this.clientes.push(cliente)
            console.log(`\nCadastro concluído.`)
        } else {
            console.log(`\nGênero inválido.`)
        }
    }
}