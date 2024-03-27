function escrever() {
    let texto = document.querySelector("#frase").value;
    let n = document.querySelector("#repetir").value;
    let resultado = document.getElementById("resultado");
    let x = new Array(n);
    for (i = 0; i < n; i ++) {
        x[i] = document.createElement("p");
        x[i].innerHTML = texto;
        console.log(x)
        resultado.appendChild(x[i]);
    };
};

//OUTRA SOLUCAO POSSIVEL
function escrever2() {
    let texto = document.querySelector("#frase").value;
    let n = document.querySelector("#repetir").value;
    let resultado = document.getElementById("resultado");
    let resposta = "";
    for (i = 0; i < n; i ++) {
        resposta += `${texto}<br>`
    };
    resultado.innerHTML = resposta;
};