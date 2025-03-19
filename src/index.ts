import * as readline from "readline"
import Somador from "./somador"
import Subtrator from "./subtrator"
import Multiplicador from "./multiplicador"
import Divisor from "./divisor"
import Potenciador from "./potenciador"
import Radiciador from "./radiciador"
import Bhaskara from "./bhaskara"

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ')
        let n1 = Number(instrucoes[0])
        let n2 = Number(instrucoes[1])
        let operacao = instrucoes[instrucoes.length - 1];

        console.log(`Estas foram suas instruções: ${instrucoes}\n`)

        switch(operacao) {
            case 'Somar':
                let calculo = new Somador()
                console.log(`Resultado: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Subtrair':
                calculo = new Subtrator()
                console.log(`Resultado: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Multiplicar':
                calculo = new Multiplicador()
                console.log(`Resultado: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Dividir':
                calculo = new Divisor()
                console.log(`Resultado: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Potenciar':
                calculo = new Potenciador()
                console.log(`Resultado: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Radiciar':
                calculo = new Radiciador()
                console.log(`Resultado: ${calculo.calcular(n1, n2)}\n`)
                break
            case 'Bhaskara':
                let calculoB = new Bhaskara()
                let n3 = Number(instrucoes[2])
                console.log(`Resultado: ${calculoB.calcularBhaskara(n1, n2, n3)}\n`)
                break
            case 'Sair':
                console.log(`Saindo...`)
                break
            default:
                console.log(`Operação inválida`)
        }
        leitor.close()
    })
}

iniciar()