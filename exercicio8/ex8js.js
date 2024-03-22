function saudacao() { 
    let resultado = document.getElementById("resultado");
    let nome = document.getElementById("nome").value;
    resultado.innerHTML = `Saudações, ${nome} você é muito bem-vindo aqui!`
}