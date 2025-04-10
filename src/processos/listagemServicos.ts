import Produto from "../modelos/produto";
import Servico from "../modelos/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>

    constructor(servicos: Array<Produto>) {
        super()
        this.servicos = servicos
    }

    listar(): void {
        console.log(`\n----- Lista de serviços -----`)
        this.servicos.forEach(produto => {
            console.log(`ID: ${produto.id}`)
            console.log(`Nome: ${produto.nome}`)
            console.log(`Preço: ${produto.preco}`)
            console.log(`---------------------------------`)
        })
    }
}