import Cliente from "../modelos/cliente";
import Listagem from "./listagem";

export default class ListagemMaisGenero extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\n----- Produtos mais consumidos por gênero -----`);

        const consumoProdutos: { [genero: string]: Map<string, number> } = {
            "M": new Map(),
            "F": new Map()
        }

        for (let cliente of this.clientes) {
            const genero = cliente.genero;
            const produtos = cliente.getProdutosConsumidos;
            const mapa = consumoProdutos[genero];

            for (let produto of produtos) {
                const nome = produto.nome;
                mapa.set(nome, (mapa.get(nome) || 0) + 1);
            }
        }

        for (let genero of ["M", "F"]) {
            console.log(`\nGênero: ${genero}`);
            const mapa = consumoProdutos[genero];
            const ordenado = Array.from(mapa.entries()).sort((a, b) => b[1] - a[1]);

            if (ordenado.length === 0) {
                console.log("Nenhum produto consumido.");
            } else {
                for (let [nome, quantidade] of ordenado) {
                    console.log(`- ${nome}: ${quantidade}x`);
                }
            }
        }

        console.log(`\n----- Serviços mais consumidos por gênero -----`);

        const consumoServicos: { [genero: string]: Map<string, number> } = {
            "M": new Map(),
            "F": new Map()
        }

        for (let cliente of this.clientes) {
            const genero = cliente.genero;
            const servicos = cliente.getServicosConsumidos;
            const mapa = consumoServicos[genero];

            for (let servico of servicos) {
                const nome = servico.nome;
                mapa.set(nome, (mapa.get(nome) || 0) + 1);
            }
        }

        for (let genero of ["M", "F"]) {
            console.log(`\nGênero: ${genero}`);
            const mapa = consumoServicos[genero];
            const ordenado = Array.from(mapa.entries()).sort((a, b) => b[1] - a[1]);

            if (ordenado.length === 0) {
                console.log("Nenhum serviço consumido.");
            } else {
                for (let [nome, quantidade] of ordenado) {
                    console.log(`- ${nome}: ${quantidade}x`);
                }
            }
        }
    }
}