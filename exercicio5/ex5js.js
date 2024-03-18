function verificar() {
    let texto = document.querySelector("#texto1").value;
    texto = texto.split("");
    let letra = document.querySelector("#letra").value;
    let contador = 0;
    texto.forEach(function(letras) {
        if (letras === letra) {
            contador += 1
        }
    });
    return document.querySelector("#resultado").innerHTML = `A quantidade dessa letra na sentença é: ${contador}`;
}