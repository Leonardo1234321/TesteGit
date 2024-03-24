function calcular() {
    let numero = document.querySelector("#fator").value;
    let resultado = numero
    for (i = (numero - 1); i > 1; i --) {
        resultado = resultado * i;
    }
    document.querySelector("#resultado").innerHTML = `O resultado da fatorial de ${numero} é ${resultado}`
};