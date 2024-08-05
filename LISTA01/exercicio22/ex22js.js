let matriz = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
let gameOver = false;
let jogador = "X"

function marcar(cell, line, collumn) {
    if (gameOver) {
        
    }
    cell.textContent = jogador;
    matriz[line][collumn] = jogador;

};
