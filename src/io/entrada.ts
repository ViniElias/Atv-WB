import promptSync from "prompt-sync";

export default class Entrada {
    receberNumero(mensagem: string): number {
        let prompt = promptSync()
        let valor = prompt(mensagem)
        let numero = new Number(valor)
        return numero.valueOf()
    }

    receberTexto(mensagem: string): string {
        let prompt = promptSync()
        let texto = prompt(mensagem)
        return texto
    }
}