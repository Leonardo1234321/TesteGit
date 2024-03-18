function calcular() {
    let temperatura = document.querySelector("#celsius").value
    let fahrenheit = (temperatura * 1.8) + 32
    return document.querySelector("#resultado").innerHTML = `${temperatura}° celsius equivale a ${fahrenheit}° fahrenheit`
}