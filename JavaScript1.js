function submeter() {
    let m = document.getElementById("massa").value
    let n = document.getElementById("altura").value
    let imc = m / (n*n);
    if (imc < 18.5) {
        alert("CLASSIFICAÇÃO: MAGREZA, SEU IMC É " + imc)
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        alert("CLASSIFICAÇÃO: NORMAL, SEU IMC É " + imc)
    }
    else if (imc > 24.9 && imc <= 29.9) {
        alert("CLASSIFICAÇÃO: SOBREPESO, SEU IMC É " + imc)
    }
    else if (imc > 29.9 && imc <= 39.9) {
        alert("CLASSIFICAÇÃO: OBESIDADE, SEU IMC É " + imc)
    }
    else if (imc > 39.9) {
        alert("CLASSIFICAÇÃO: OBESIDADE GRAVE, SEU IMC É " + imc)
    }

}
