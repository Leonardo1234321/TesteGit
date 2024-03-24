function checar() {
    let vetor = (document.querySelector("#texto").value).split("");
    let textotamanho = vetor.length - 1;
    let resultado = [];
    for (i = textotamanho; i >= 0; i -= 1) {
        resultado.push(vetor[i]);
        console.log(resultado)
    };
    vetor = (vetor.toString()).toLowerCase();
    resultado = (resultado.toString()).toLowerCase();
    console.log(vetor);
    console.log(resultado);
    if (vetor === resultado) {
        document.querySelector("#resultado").innerHTML = "é Palíndromo";
    }
    else {
        document.querySelector("#resultado").innerHTML = "não é  Palíndromo";
    }
};
//METODO PUSH ADICIONA ELEMENTOS A ARRAY