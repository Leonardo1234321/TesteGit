let size = 10;
let chessboard = "";
for (a = 0; a < size; a++) {
    if (a % 2 == 0) {
        for (i = 0; i < (size/2); i ++) {
            chessboard += "_#";
        };
    }
    else {
        for (i = 0; i < (size/2); i ++) {
            chessboard += "#_";
        };
    }
    chessboard += "\n";
};
console.log(chessboard);