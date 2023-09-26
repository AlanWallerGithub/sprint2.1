"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({ input: process.stdin,
    output: process.stdout });
function imprimirInput() {
    return console.log("\nPara salir del loop, pulsa barra espaciadora");
}
const debounce = (callback, limit) => {
    let timeoutDebounce;
    return function () {
        if (timeoutDebounce) {
            clearTimeout(timeoutDebounce);
        }
        if (typeof (callback) !== 'function') {
            return "ERROR: el callback debe ser una función";
        }
        else
            timeoutDebounce = setTimeout(() => {
                callback();
            }, limit);
    };
};
const imprimirConDebounce = debounce(imprimirInput, 1000);
function funcionCLI() {
    console.log("Pulsa cualquier tecla del teclado, tantas veces como quieras. Solo se ejecutará la última vez que lo hayas pulsado, cuando pase un segundo desde esa vez");
    var stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', function (key) {
        let bufferUTF8 = key.toString('utf8');
        // El loop se rompe con BARRA ESPACIADORA
        if (bufferUTF8 === '\u0020') {
            process.exit();
        }
        imprimirConDebounce();
    });
}
funcionCLI();
