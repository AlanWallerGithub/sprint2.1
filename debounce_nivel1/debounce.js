"use strict";
function imprimirInput(inputUsuarioParametro) {
    return inputUsuarioParametro;
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
module.exports = { debounce };
