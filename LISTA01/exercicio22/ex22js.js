<<<<<<< HEAD
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
=======
var matriz = [
    [ , , ],
    [ , , ],
    [ , , ]
];
var jogador1 = 'X'

var vitoria = false
function marcar(cell, x, y) {
    if (!cell.textContent && !vitoria && jogador1 === 'X') { 
        cell.textContent = jogador1;
        jogador1 = 'O'
        matriz[x][y] = 0
    } 
    else if (!cell.textContent && !vitoria && jogador1 === 'O') {
        cell.textContent = jogador1;
        jogador1 = 'X'
        matriz[x][y] = 1
    };

};
function verificarLinhas(matriz, jogador) {
    for (i=0; i <= 2; i++) {
        let contagem_linha  = 0;
        let contagem_coluna = 0;
        for (j = 0;j<=2; j++) {
            if (matriz[i][j] === jogador) {
                contagem_linha += 1
            }
            if (matriz[j][i] === jogador) {
                contagem_coluna += 1
            }
        }
        if (contagem_linha === 3) {
            vitoria = true;
            return `Jogador ${jogador} ganhou!`
        } else if (contagem_coluna === 3 ) {
            vitoria = true;
            return `Jogador ${jogador} ganhou!`
        }
    };
    for (c = 0; c <= 2; c++) {
        let contagem = 0
        let contaegem2 = 0
        let c_inv = 2 - c
        if (matriz[c][c] === jogador) {
            contagem += 1;
        }
        if (matriz[c_inv][c_inv] === jogador) {
            contaegem2 += 1;
        }
        if (contagem === 3) {
            vitoria =
            return `Jogador ${jogador} ganhou!`
        }
        if (contaegem2 === 3) {
            return `Jogador ${jogador} ganhou!`
        }

    };
}
>>>>>>> 36c9ae9139a628d3128d6aadf86acb7f6dd0743d
