export default class Servico {
    id: string
    nome: string
    preco: string

    constructor(id: string, nome: string, preco: string) {
        this.id = id
        this.nome = nome
        this.preco = preco
    }

    get getId(): string {
        return this.id
    }
}