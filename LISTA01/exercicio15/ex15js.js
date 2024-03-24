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
function checar2() {
    let vetor = document.querySelector("#texto").value;
    let rotev = vetor.split("");
    rotev = rotev.reverse();
    rotev = (rotev.join("")).toLowerCase();
    vetor = vetor.toLowerCase();
    console.log(vetor);
    console.log(rotev);
    if (vetor === rotev) {
        document.querySelector("#resultado").innerHTML = "é Palíndromo";
    }
    else {
        document.querySelector("#resultado").innerHTML = "não é  Palíndromo";
    } 
};//USO DO MÉTODO JOIN QUE JUNTA OS ELEMENTOS DE UMA ARRAY PARA LISTA, SE O PARAMETRO FOR OMITIDO ELE USA "," AUTOMATICAMENTE