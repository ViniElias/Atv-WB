import Entrada from "../io/entrada";
import Servico from "../modelos/servico";
import Exclusao from "./exclusao";

export default class ExclusaoServico extends Exclusao {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    excluir(): void {
        console.log(`\n----- Exclusão do Serviço -----`)
        let id = this.entrada.receberTexto(`Digite o ID do serviço a ser excluído: `)
        const indice = this.servicos.findIndex(c => c.getId === id)

        if(indice !== -1) {
            this.servicos.splice(indice, 1)
            console.log(`\nExclusão concluída.`)
        } else {
            console.log(`\nID não encontrado.`)
        }
    }
}