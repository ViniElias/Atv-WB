import Cliente from "../modelos/cliente"
import CPF from "../modelos/cpf"
import Produto from "../modelos/produto"
import Servico from "../modelos/servico"

export const clientes: Cliente[] = [
    new Cliente("Vinicius", "Vinicius", "M", new CPF("123.456.789-00", new Date(6, 12, 2005))),
    new Cliente("Maria", "Maria", "F", new CPF("321.654.987-01", new Date(12, 6, 2004))),
    new Cliente("João", "João", "M", new CPF("121.451.181-10", new Date(1, 1, 2000))),
    new Cliente("Lucas", "Lucas", "M", new CPF("333.446.787-40", new Date(10, 4, 2007))),
    new Cliente("Luana", "Luana", "F", new CPF("122.452.782-22", new Date(31, 10, 1990))),
    new Cliente("Ana", "Ana", "F", new CPF("111.222.333-44", new Date(15, 3, 1995))),
    new Cliente("Carlos", "Carlos", "M", new CPF("222.333.444-55", new Date(22, 7, 1988))),
    new Cliente("Fernanda", "Fernanda", "F", new CPF("333.444.555-66", new Date(9, 11, 1992))),
    new Cliente("Pedro", "Pedro", "M", new CPF("444.555.666-77", new Date(3, 2, 1999))),
    new Cliente("Julia", "Julia", "F", new CPF("555.666.777-88", new Date(27, 8, 2001))),
    new Cliente("Bruno", "Bruno", "M", new CPF("666.777.888-99", new Date(5, 9, 1990))),
    new Cliente("Paula", "Paula", "F", new CPF("777.888.999-00", new Date(14, 4, 1985))),
    new Cliente("Gabriel", "Gabriel", "M", new CPF("888.999.000-11", new Date(1, 6, 1993))),
    new Cliente("Isabela", "Isabela", "F", new CPF("999.000.111-22", new Date(19, 12, 1997))),
    new Cliente("Felipe", "Felipe", "M", new CPF("000.111.222-33", new Date(30, 10, 1991))),
    new Cliente("Larissa", "Larissa", "F", new CPF("112.233.344-45", new Date(6, 1, 2003))),
    new Cliente("André", "André", "M", new CPF("223.344.455-56", new Date(12, 5, 1998))),
    new Cliente("Rafaela", "Rafaela", "F", new CPF("334.455.566-67", new Date(25, 3, 2000))),
    new Cliente("Rodrigo", "Rodrigo", "M", new CPF("445.566.677-78", new Date(18, 7, 1994))),
    new Cliente("Camila", "Camila", "F", new CPF("556.677.788-89", new Date(11, 11, 1996))),
    new Cliente("Thiago", "Thiago", "M", new CPF("667.788.899-90", new Date(7, 9, 2002))),
    new Cliente("Mariana", "Mariana", "F", new CPF("778.899.900-01", new Date(20, 6, 1993))),
    new Cliente("Henrique", "Henrique", "M", new CPF("889.900.011-12", new Date(4, 4, 1989))),
    new Cliente("Beatriz", "Beatriz", "F", new CPF("990.011.122-23", new Date(2, 2, 1990))),
    new Cliente("Eduardo", "Eduardo", "M", new CPF("101.112.233-34", new Date(16, 8, 1986))),
    new Cliente("Vanessa", "Vanessa", "F", new CPF("212.223.344-45", new Date(28, 5, 2005))),
    new Cliente("Diego", "Diego", "M", new CPF("323.334.455-56", new Date(10, 10, 1991))),
    new Cliente("Tatiane", "Tatiane", "F", new CPF("434.445.566-67", new Date(13, 7, 1987))),
    new Cliente("Renan", "Renan", "M", new CPF("545.556.677-78", new Date(21, 12, 2000))),
    new Cliente("Aline", "Aline", "F", new CPF("656.667.788-89", new Date(8, 3, 1995)))
]

export const produtos: Produto[] = [
    new Produto("1", "Shampoo", "25.00"),
    new Produto("2", "Condicionador", "25.00"),
    new Produto("3", "Hidratante", "35.00"),
    new Produto("4", "Protetor solar", "40.00"),
    new Produto("5", "Body splash", "30.00"),
    new Produto("6", "Sabonete líquido", "20.00"),
    new Produto("7", "Demaquilante", "20.00"),
    new Produto("8", "Sérum", "20.00"),
    new Produto("9", "Escova de cabelo", "10.00"),
    new Produto("10", "Desodorante", "20.00"),
    new Produto("11", "Gel de cabelo", "20.00"),
    new Produto("12", "Minoxidil", "50.00"),
    new Produto("13", "Água micelar", "10.00"),
    new Produto("14", "Esfoliante", "30.00"),
    new Produto("15", "Esmalte", "50.00"),
    new Produto("16", "Base", "50.00"),
    new Produto("17", "Delineador", "50.00"),
    new Produto("18", "Secador de cabelo", "150.00"),
    new Produto("19", "Chapinha", "150.00"),
    new Produto("20", "Creme corporal", "40.00")
]

export const servicos: Servico[] = [
    new Servico("1", "Corte de cabelo", "30.00"),
    new Servico("2", "Cabelo e barba", "35.00"),
    new Servico("3", "Depilação", "40.00"),
    new Servico("4", "Luzes", "100.00"),
    new Servico("5", "Pintura de cabelo", "300.00"),
    new Servico("6", "Botox", "1500.00"),
    new Servico("7", "Rinoplastia", "5000.00"),
    new Servico("8", "Remoção de rugas", "500.00"),
    new Servico("9", "Remoção de manchas", "500.00"),
    new Servico("10", "Tratamento para emagrecimento", "400.00"),
    new Servico("11", "Serviço de manicure", "100.00"),
    new Servico("12", "Serviço de pedicure", "80.00"),
    new Servico("13", "Design de sobrancelhas", "150.00"),
    new Servico("14", "Lipoaspiração", "500.00"),
    new Servico("15", "Hidratação capilar", "200.00"),
    new Servico("16", "Peeling facial", "300.00"),
    new Servico("17", "Massagem", "250.00"),
    new Servico("18", "Limpeza de pele", "180.00"),
    new Servico("19", "Progressiva", "350.00"),
    new Servico("20", "Aplicação de unhas postiças", "200.00")
]

// Adicionando um produto e um serviço aleatório para cada cliente
clientes.forEach(cliente => {
    const qtdProdutos = Math.floor(Math.random() * 5)
    const qtdServicos = Math.floor(Math.random() * 5)

    for (let i = 0; i < qtdProdutos; i++) {
        const produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)]
        cliente.getProdutosConsumidos.push(produtoAleatorio)
        produtoAleatorio.vendas++
    }

    for (let i = 0; i < qtdServicos; i++) {
        const servicoAleatorio = servicos[Math.floor(Math.random() * servicos.length)]
        cliente.getServicosConsumidos.push(servicoAleatorio)
        servicoAleatorio.vendas++
    }
})