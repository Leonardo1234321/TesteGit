require("./TesteGit")("useful_functions.js");
function alfaStrg() {
    let str = document.getElementById("inputo").value;
    let listStr = str.split("");
    while(true) {
        if (listStr.indexOf(" ") != -1) {
            remove(listStr, listStr.indexOf(" ") )
        }
        else {
            break
        }
    };
    listStr = listStr.sort();
    listStr = listStr.join("");
    return document.getElementById("resultado").innerHTML = `${listStr}`;
};
