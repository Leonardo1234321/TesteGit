function fatorial() {
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
