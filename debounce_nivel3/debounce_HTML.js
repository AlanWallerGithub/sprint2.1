"use strict";
function imprimirInput() {
    document.getElementById("mostrar").innerHTML += "COMPRA REALIZADA" + "<br>";
}
const debounce = (callback, limit) => {
    let timeoutDebounce;
    return function () {
        if (timeoutDebounce) {
            clearTimeout(timeoutDebounce);
        }
        if (typeof (callback) !== 'function') {
            return document.getElementById("mostrar").innerHTML = "ERROR: el callback debe ser una función";
        }
        else
            timeoutDebounce = setTimeout(() => {
                callback();
            }, limit);
    };
};
const imprimirConDebounce = debounce(imprimirInput, 1000);
function comprar() {
    imprimirConDebounce();
}
