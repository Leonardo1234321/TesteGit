function checar() {
    let vetor = (document.querySelector("#lista").value).split(" ");
    let numero = vetor[0];
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = parseInt(vetor[i]);
    };
    for (i = 0; i < vetor.length; i++) {
        if (numero < vetor[i]) {
            numero = vetor[i];
        }
    };
    document.querySelector("#resultado").innerHTML = `O maior número da lista é ${numero}`
}