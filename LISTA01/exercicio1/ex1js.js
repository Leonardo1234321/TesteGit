function idadeCalculo() {
    let dataAtual = new Date();
    let dataNascimento = new Date(document.querySelector("#data").value);
    let anoNas = dataNascimento.getFullYear()
    let anoAtual = dataAtual.getFullYear()
    let mesAtual = dataAtual.getMonth()
    let mesNas = dataNascimento.getMonth()
    let diaAtual = dataAtual.getDate()
    let diaNas = dataNascimento.getDate() + 1
    const resultado = (a, b) => document.querySelector("#resultado").innerHTML = `Esta pessoa nasceu em ${b} e tem ${a - b} anos de idade`

    if (anoNas > anoAtual) {
        return alert("Insira uma data de nascimento válida");
    }
    else if (anoNas === anoAtual) {
        if (mesNas > mesAtual || mesNas === mesAtual && diaNas > diaAtual) {
            return alert("Insira uma data de nascimento válida");
        }
        else {
            resultado(anoAtual, anoNas)
        }
    }
    else if (anoNas < anoAtual) {
        if (mesNas < mesAtual) {
            resultado(anoAtual, anoNas)
        }
        else if (mesNas === mesAtual && diaNas <= diaAtual) {
            resultado(anoAtual, anoNas)
        }
        else {
            resultado(anoAtual - 1, anoNas)
        }
    }
};
