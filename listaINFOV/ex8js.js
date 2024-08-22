/*function compressString(string) {
    let strfinal = string[0];
    let counter = 1;
    let temp = 1
    for (let i = 1; i < string.length; i++) {
        if (string[i] === strfinal[temp - 1]) {
            counter += 1;
            console.log(counter)
        }
        else {
            strfinal += counter.toString();
            strfinal += string[i];
            temp += counter.toString().length + 1;
            counter = 1;
        }
    };
    strfinal += counter.toString();

    if (strfinal.length < string.length) {
        return strfinal;
    }
    return string;
};
console.log(compressString("aaaabbbDDDDDDDDDDDDcc"));*/

/*function compressString(string) {
    if (string.length === 0) return string; // Verifica se a string está vazia

    let strfinal = '';
    let counter = 1;

    for (let i = 1; i < string.length; i++) {
        if (string[i] === string[i - 1]) {
            counter++;
        } else {
            strfinal += string[i - 1] + (counter > 1 ? counter.toString() : '');
            counter = 1; // Reset do contador para o próximo caractere
        }
    }

    // Adiciona o último caractere e seu contador
    strfinal += string[string.length - 1] + (counter > 1 ? counter.toString() : '');

    // Retorna a string comprimida se ela for menor que a original
    return strfinal.length < string.length ? strfinal : string;
}

console.log(compressString("aaaabbbDDDDDDDDDDDDcc")); // Saída: "a4b3D10c2"

*/

function compressString(string) {
    if (string.length === 0) return string; // Caso de string vazia

    let strfinal = '';
    let counter = 1;

    for (let i = 1; i <= string.length; i++) {
        // Compara o caractere atual com o próximo
        if (i < string.length && string[i] === string[i - 1]) {
            counter++;
        } else {
            // Adiciona o caractere e o contador (se > 1) à string final
            strfinal += string[i - 1] + (counter > 1 ? counter : '');
            counter = 1; // Reseta o contador
        }
    }

    // Retorna a string comprimida se ela for menor que a original
    return strfinal.length < string.length ? strfinal : string;
}
