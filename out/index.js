"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var somador_1 = __importDefault(require("./somador"));
var subtrator_1 = __importDefault(require("./subtrator"));
var multiplicador_1 = __importDefault(require("./multiplicador"));
var divisor_1 = __importDefault(require("./divisor"));
var potenciador_1 = __importDefault(require("./potenciador"));
var radiciador_1 = __importDefault(require("./radiciador"));
var bhaskara_1 = __importDefault(require("./bhaskara"));
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais s\u00E3o seus n\u00FAmeros e a opera\u00E7\u00E3o desejada?\n", function (valor) {
        var instrucoes = valor.split(' ');
        var n1 = Number(instrucoes[0]);
        var n2 = Number(instrucoes[1]);
        var operacao = instrucoes[instrucoes.length - 1];
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
        switch (operacao) {
            case 'Somar':
                var calculo = new somador_1.default();
                console.log("Resultado: ".concat(calculo.calcular(n1, n2), "\n"));
                break;
            case 'Subtrair':
                calculo = new subtrator_1.default();
                console.log("Resultado: ".concat(calculo.calcular(n1, n2), "\n"));
                break;
            case 'Multiplicar':
                calculo = new multiplicador_1.default();
                console.log("Resultado: ".concat(calculo.calcular(n1, n2), "\n"));
                break;
            case 'Dividir':
                calculo = new divisor_1.default();
                console.log("Resultado: ".concat(calculo.calcular(n1, n2), "\n"));
                break;
            case 'Potenciar':
                calculo = new potenciador_1.default();
                console.log("Resultado: ".concat(calculo.calcular(n1, n2), "\n"));
                break;
            case 'Radiciar':
                calculo = new radiciador_1.default();
                console.log("Resultado: ".concat(calculo.calcular(n1, n2), "\n"));
                break;
            case 'Bhaskara':
                var calculoB = new bhaskara_1.default();
                var n3 = Number(instrucoes[2]);
                console.log("Resultado: ".concat(calculoB.calcularBhaskara(n1, n2, n3), "\n"));
                break;
            case 'Sair':
                console.log("Saindo...");
                break;
            default:
                console.log("Opera\u00E7\u00E3o inv\u00E1lida");
        }
        leitor.close();
    });
};
iniciar();
