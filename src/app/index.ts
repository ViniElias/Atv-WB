import Entrada from "../io/entrada"
import Empresa from "../modelos/empresa"
import CadastroCliente from "../processos/cadastroCliente"
import ExclusaoCliente from "../processos/exclusaoCliente"
import ListagemClientes from "../processos/listagemClientes"

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty!`)
let empresa = new Empresa()
let execucao = true

while(execucao) {
    console.log(`\nOpções:`)
    console.log(`1 - Cadastrar cliente`)
    console.log(`2 - Listar todos os clientes`)
    console.log(`3 - Editar cliente`)
    console.log(`4 - Excluir cliente`)
    console.log(`0 - Sair\n`)

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Escolha uma opção: `)

    switch(opcao) {
        case 0:
            execucao = false
            console.log(`Encerrando...`)
            break
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break
        case 3:
            break
        case 4:
            let exclusao = new ExclusaoCliente(empresa.getClientes)
            exclusao.excluir()
            break
        default:
            console.log(`Opção inválida.`)
    }
}