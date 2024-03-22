function checar() {
    let email = document.querySelector("#email").value;
    if (email.search("@") != -1 && email.search(".") != -1) {
        return document.querySelector("#resultado").innerHTML = "E-mail válido"
    }
    else {
        return document.querySelector("#resultado").innerHTML = "E-mail inválido"
    }
};