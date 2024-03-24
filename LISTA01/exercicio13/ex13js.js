function checar() {
    let vetor = (document.querySelector("#lista").value).split(" ");
    let textoFinal = "";
    vetor.forEach((texto) => textoFinal += texto);
    document.querySelector("#resultado").innerHTML = `Texto final: ${textoFinal}`;
};
function checar2() {
    let vetor = (document.querySelector("#lista").value).split(" ");
    let textoFinal = vetor.join("")
    document.querySelector("#resultado").innerHTML = `Texto final: ${textoFinal}`;
};