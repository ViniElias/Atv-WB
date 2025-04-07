import CPF from "./cpf"
import RG from "./rg"
import Telefone from "./telefone"
import Produto from "./produto"
import Servico from "./servico"

export default class Cliente {
    nome: string
    nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>

    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial =nomeSocial
        this.cpf = cpf
    }

    get getCpf(): CPF {
        return this.cpf
    }

    get getRgs(): Array<RG> {
        return this.rgs
    }

    get getDataCadastro(): Date {
        return this.dataCadastro
    }

    get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}