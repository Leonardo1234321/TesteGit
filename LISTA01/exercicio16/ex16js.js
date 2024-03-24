function checar() {
    let texto = (document.querySelector("#texto").value).split(" ");
    document.querySelector("#resultado").innerHTML = `A quantia de palavras na string é ${texto.length}`
};