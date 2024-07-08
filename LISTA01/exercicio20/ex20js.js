function verificarSenha(senha) {
    let reStr = /[A-Za-z]/g;
    let reNum = /[0-9]/g;
    if (senha.length < 8 || senha.search(reStr) == -1 || senha.search(reNum) == -1) {
        return true;
    }
    else {
        return false;

    };
};
function verificarEmail(email) {
    let re = /[a-z]{1,64}?[@][a-z][.][com]/g;
    return re.test(email);
};
console.log(verificarEmail('leogamerturbo@gmail.com'))
function main() {

}