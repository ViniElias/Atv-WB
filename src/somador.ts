import Calculo from "./calculo";

export default class Somador extends Calculo {
    public calcular(n1: number, n2: number) {
        return n1 + n2
    }
}