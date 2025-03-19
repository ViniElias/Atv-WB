import Calculo from "./calculo";

export default class Potenciador extends Calculo {
    public calcular(n1: number, n2: number) {
        let x = 1
        for(let i = 1; i <= n2; i++){
            x = x * n1
        }
        return x
    }
}