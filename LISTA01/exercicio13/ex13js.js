function checar() {
    let vetor = (document.querySelector("#lista").value).split(" ");
    textoFinal = "";
    vetor.forEach((texto) => textoFinal += texto);
    document.querySelector("#resultado").innerHTML = `Texto final: ${textoFinal}`;
};
