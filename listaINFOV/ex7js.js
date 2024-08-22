
/*function groupByFirstLetter(array) {
    let objeto = {};
    array.forEach(name => {
        if (Object.keys(objeto).includes(name[0])) {
            objeto[name[0]].push(name)
        } else {
            objeto[name[0]] = [];
            objeto[name[0]].push(name);
        }
    })
    return objeto;
};

console.log(groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]));
*/

function groupByFirstLetter(array) {
    let objeto = {};
    array.forEach(name => {
        // Se a chave já existe, simplesmente adicione à lista
        if (objeto[name[0]]) {
            objeto[name[0]].push(name);
        } else {
            // Caso contrário, crie uma nova lista com o primeiro nome
            objeto[name[0]] = [name];
        }
    });
    return objeto;
};

console.log(groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]));