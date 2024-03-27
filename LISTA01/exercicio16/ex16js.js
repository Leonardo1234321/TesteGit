function checar() {
    let texto = document.querySelector("#texto").value;
    texto = texto.toLowerCase();
    let palavra = document.querySelector("#palavra").value;
    texto = palavra.toLowerCase();
    let resultado = texto.split(palavra).length - 1
    document.getElementById("resultado").innerHTML = `<h1> HÁ ${resultado} PALAVRAS NESSA SENTENÇA </h1>`
}