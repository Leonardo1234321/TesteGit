/*function fatorial() {
    let n = document.querySelector("#numero").value;
    let resultado = 1;
    for (i = 1; i <= n; i++) {
        resultado *= i;
    };
    return document.querySelector("#resultado").innerHTML = `Fatorial de ${n} = ${resultado}`;
}
const inputEnt = document.getElementById("numero");
inputEnt.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        fatorial();
    }
});
*/
function duplicado(array) {
    let array1 = [];
    for (let i = 0; i < array.length; i++) {
        if (array1.includes(array[i])) {
            return array[i];
        }
        else {
            array1.push(array[i])
        }
    }
    return null
};
console.log(duplicado([1,2,3,4]))