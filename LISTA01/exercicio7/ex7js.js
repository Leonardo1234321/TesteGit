function verificar() {
    let senha = document.querySelector("#senha").value
    if (senha.length < 6) {
        document.querySelector("#resultado").innerHTML = "Senha inválida, menos de 6 caracteres"

    }
    else {
        document.querySelector("#resultado").innerHTML = "Senha válida"

    }
}