function trocar() {
    let frase = document.querySelector("#frase").value;
    let palavra = document.querySelector("#palavra").value;
    let palavra2 = document.querySelector("#palavra2").value;
    while (true) {
        if (frase.includes(palavra)) {
            frase = frase.replace(palavra, palavra2);
        }
        else {
            break
        }
    };
    document.getElementById("resultado").innerHTML=`<h1>A frase agora é ${frase} </h1>`
};