import Entrada from "../io/entrada"
import Servico from "../modelos/servico"
import Cadastro from "./cadastro"

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    cadastrar(): void {
        console.log(`\n----- Cadastro de Serviço -----`)
        let id = this.entrada.receberTexto(`ID: `)
        let nome = this.entrada.receberTexto(`Nome: `)
        let preco = this.entrada.receberTexto(`Preço: `)

        let servico = new Servico(id, nome, preco)

        this.servicos.push(servico)
        console.log(`\nServiço cadastrado.`)
    }
}