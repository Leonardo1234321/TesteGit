function verificarSenha(senha) {
    let reStr = /[A-Za-z]/g;
    let reNum = /[0-9]/g;
    if (senha.length < 8 || senha.search(reStr) == -1 || senha.search(reNum) == -1) {
        return false;
    }
    else {
        return true;

    };
};
function verificarEmail(email) {
    let re = /[a-z]{1,64}?[@][a-z]{1,64}?[.][com]/g;
    return re.test(email);
};

function main() {
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    senha = document.getElementById('senha').value;
    senhaConf = document.getElementById('senhaConf').value;

    if (nome && email && senha && senhaConf) {
        if (!verificarEmail(email)) {
            return document.getElementById('resultado').innerHTML = 'Email inválido';
        } 
        else if (!verificarSenha(senha)) {
            return document.getElementById('resultado').innerHTML = 'Senha inválida, menos de 8 caracteres ou nenhuma letra ou número';
        }
        else if (senha != senhaConf) {
            return document.getElementById('resultado').innerHTML = 'Confirmação de senha diferente da senha! ';
        }
        else {
            return document.getElementById('resultado').innerHTML = 'Submetido!';
        }
    }
    else {
        return document.getElementById('resultado').innerHTML = 'Preencha todos os campos antes de submeter!';
    };
};