function verificar() {
    let texto = document.querySelector("#texto1").value;
    texto = texto.toLowerCase();
    texto = texto.split("");
    let letra = document.querySelector("#letra").value;
    letra.toLowerCase();
    let contador = 0;
    texto.forEach(function(letras) {
        if (letras === letra) {
            contador += 1
        }
    });
    return document.querySelector("#resultado").innerHTML = `A quantidade dessa letra na sentença é: ${contador}`;
}
function verificar2() {
    let texto = document.querySelector("#texto1").value;
    let letra = document.querySelector("#letra").value;
    texto = texto.toLowerCase();
    letra.toLowerCase();
    resultado = texto.split(letra).length - 1
    return document.querySelector("#resultado").innerHTML = `A quantidade dessa letra na sentença é: ${resultado}`;
}