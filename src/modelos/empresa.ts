import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor() {
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }

    get getClientes() {
        return this.clientes
    }

    get getProdutos() {
        return this.produtos
    }

    get getServicos() {
        return this.servicos
    }
}