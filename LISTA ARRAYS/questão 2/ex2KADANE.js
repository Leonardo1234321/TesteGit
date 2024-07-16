let vetor = [1,2,-5,-9,-7,4,1,10,9,-8,3,4,-9,-2,7,5,-5,9,1,23,6,-90,2,1,-100,-1,-3,12,56,-20,-80,1,2,3,-9,60,1]
function subArraysum(vetor) {
    let localMaximum = vetor[0];
    let start = 0;
    let finish = 0;
    let maximoAgora = 0;
    for (i = 1; i < vetor.length; i++) {
        localMaximum = Math.max(vetor[i], vetor[i] + localMaximum);
        maximoAgora = Math.max(localMaximum, maximoAgora);
    };
    return maximoAgora;
}
console.log(subArraysum(vetor))