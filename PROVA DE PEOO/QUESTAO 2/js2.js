function calcular() {
    let x1 = document.querySelector("#p11").value;
    let y1 = document.querySelector("#p12").value;
    let x2 = document.querySelector("#p21").value;
    let y2 = document.querySelector("#p22").value;
    let distancia = Math.sqrt(((x2 - x1)*(x2 - x1)) + ((y2 - y1)*(y2 - y1)));
    document.querySelector("#resultado").innerHTML = `A distância entre P1(${x1}, ${y1}) e P2(${x2}, ${y2}) é ${distancia}`;
}