function calcular() {
    let n = document.querySelector("#numero").value
    if (n % 2 === 0) {
        return document.querySelector("#resultado").innerHTML = "O número é par"
    }
    else {
        return document.querySelector("#resultado").innerHTML = "O número é ímpar"
    }
}