import Entrada from "../io/entrada";
import Servico from "../modelos/servico";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    atualizar(): void {
        console.log(`\n----- Atualização de serviço -----`)
        let id = this.entrada.receberTexto(`Digite o ID do serviço a ser atualizado: `)
        const servico = this.servicos.find(c => c.getId === id)

        if(Servico) {
            let novoNome = this.entrada.receberTexto(`Novo nome: `)
            let novoPreco = this.entrada.receberTexto(`Novo preço: `)

            if(novoNome.trim() !== "") {servico.nome = novoNome}
            if(novoPreco.trim() !== "") {servico.preco = novoPreco}
            
        } else {
            console.log(`\nID não encontrado.`)
        }
    }
}