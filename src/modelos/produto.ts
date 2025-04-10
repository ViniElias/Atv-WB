export default class Produto {
    nome: string
    preco: string
    id: string

    constructor(id: string, nome: string, preco: string) {
        this.nome = nome
        this.preco = preco
        this.id = id
    }

    get getId(): string {
        return this.id
    }
}