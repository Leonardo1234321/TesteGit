function calcular() {
    let larg = document.querySelector("#larg").value
    let comp = document.querySelector("#comp").value
    return document.getElementById("resultado").innerHTML = `A área do retângulo de lado ${comp}m e ${larg}m é ${comp * larg}m² `
}