function checar() {
    let vetor = (document.querySelector("#lista").value).split(" ");
    let soma = 0;
    for (i = 0; i < vetor.length; i++) {
        vetor[i] = parseInt(vetor[i]);
        soma += vetor[i]
    };
    document.querySelector("#resultado").innerHTML = `A soma dos número da lista é ${soma}`
}