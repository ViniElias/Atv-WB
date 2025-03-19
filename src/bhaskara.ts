import CalculoBhaskara from "./calculoBhaskara"

export default class Bhaskara extends CalculoBhaskara {
    public calcularBhaskara(a: number, b: number, c: number): number[] | string {
        let delta = b * b - 4 * a * c

        if (delta < 0) {
            return "Sem raízes reais"
        }

        let raiz1 = (-b + Math.sqrt(delta)) / (2 * a)
        let raiz2 = (-b - Math.sqrt(delta)) / (2 * a)

        if(raiz1 != raiz2) {
            return [raiz1, raiz2]
        } else {
            return [raiz1]
        }
    }
}