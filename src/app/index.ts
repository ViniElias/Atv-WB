import Entrada from "../io/entrada"
import Empresa from "../modelos/empresa"
import AtualizacaoCliente from "../processos/atualizacaoCliente"
import AtualizacaoProduto from "../processos/atualizacaoProduto"
import AtualizacaoServico from "../processos/atualizacaoServico"
import CadastroCliente from "../processos/cadastroCliente"
import CadastroProduto from "../processos/cadastroProduto"
import CadastroServico from "../processos/cadastroServico"
import ExclusaoCliente from "../processos/exclusaoCliente"
import ExclusaoProduto from "../processos/exclusaoProduto"
import ExclusaoServico from "../processos/exclusaoServico"
import ListagemClientes from "../processos/listagemClientes"
import ListagemProdutos from "../processos/listagemProdutos"
import ListagemServicos from "../processos/listagemServicos"

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty!`)
let empresa = new Empresa()
let execucao = true

while(execucao) {
    console.log(`\n----- Menu World Beauty -----`)
    console.log(`1 - Clientes`)
    console.log(`2 - Produtos`)
    console.log(`3 - Serviços`)
    console.log(`4 - Listagem`)
    console.log(`0 - Sair`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Escolha uma opção: `)

    switch(opcao) {
        case 0:
            execucao = false
            console.log(`Volte sempre!`)
            break
        case 1:
            console.log(`\n----- Menu de Clientes -----`)
            console.log(`1 - Cadastrar`)
            console.log(`2 - Editar`)
            console.log(`3 - Excluir`)
            console.log(`4 - Listar todos`)
            console.log(`0 - Voltar`)

            entrada = new Entrada()
            opcao = entrada.receberNumero(`Escolha uma opção: `)

            switch(opcao) {
                case 0:
                    break
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break
                case 2:
                    let atualizacao = new AtualizacaoCliente(empresa.getClientes)
                    atualizacao.atualizar()
                    break
                case 3:
                    let exclusao = new ExclusaoCliente(empresa.getClientes)
                    exclusao.excluir()
                    break
                case 4:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break
                default:
                    console.log(`Opção inválida.`)
                }
                break
        case 2:
            console.log(`\n----- Menu de Produtos -----`)
            console.log(`1 - Cadastrar`)
            console.log(`2 - Editar`)
            console.log(`3 - Excluir`)
            console.log(`4 - Listar todos`)
            console.log(`0 - Voltar`)

            entrada = new Entrada()
            opcao = entrada.receberNumero(`Escolha uma opção: `)

            switch(opcao) {
                case 0:
                    break
                case 1:
                    let cadastro = new CadastroProduto(empresa.getProdutos)
                    cadastro.cadastrar()
                    break
                case 2:
                    let atualizacao = new AtualizacaoProduto(empresa.getProdutos)
                    atualizacao.atualizar()
                    break
                case 3:
                    let exclusao = new ExclusaoProduto(empresa.getProdutos)
                    exclusao.excluir()
                    break
                case 4:
                    let listagem = new ListagemProdutos(empresa.getProdutos)
                    listagem.listar()
                    break
                default:
                    console.log(`Opção inválida.`)
                }
                break
        case 3:
            console.log(`\n----- Menu de Serviços -----`)
            console.log(`1 - Cadastrar`)
            console.log(`2 - Editar`)
            console.log(`3 - Excluir`)
            console.log(`4 - Listar todos`)
            console.log(`0 - Voltar`)

            entrada = new Entrada()
            opcao = entrada.receberNumero(`Escolha uma opção: `)

            switch(opcao) {
                case 0:
                    break
                case 1:
                    let cadastro = new CadastroServico(empresa.getServicos)
                    cadastro.cadastrar()
                    break
                case 2:
                    let atualizacao = new AtualizacaoServico(empresa.getServicos)
                    atualizacao.atualizar()
                    break
                case 3:
                    let exclusao = new ExclusaoServico(empresa.getServicos)
                    exclusao.excluir()
                    break
                case 4:
                    let listagem = new ListagemServicos(empresa.getServicos)
                    listagem.listar()
                    break
                default:
                    console.log(`Opção inválida.`)
                }
                break
        }
}