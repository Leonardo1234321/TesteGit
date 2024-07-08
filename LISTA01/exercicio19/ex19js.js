function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index+1))
};

function alfaStrg() {
    let str = document.getElementById("inputo").value;
    let listStr = str.split("");
    while(true) {
        if (listStr.indexOf(' ') != -1) {
            listStr = remove(listStr, listStr.indexOf(' '));
            console.log(listStr)
        }
        else {
            break;
        };
    };
    listStr = listStr.sort();
    listStr = listStr.join('');
    return document.getElementById("resultado").innerHTML = `${listStr}`;
};
