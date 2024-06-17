let vetor = [1,2,-5,-9,-7,4,1,10,9,-8,3,4,-9,-2,7,5,-5,9,1,23,6,-90,2,1,-100,-1,-3,12,56,-20,-80,1,2,3,-9,60,1]
function subArraysum(vetor) {
    localMaximum = vetor[0];
    start = 0;
    finish = 0;
    for (i = 1; i < vetor.length; i++) {
        localMaximum = Math.max(vetor[i], vetor[i] + localMaximum);
        console.log(localMaximum)
        if ((Math.max(vetor[i], vetor[i] + localMaximum)) === i) {
            start += 1
            finish += 1
        }
        else if ((Math.max(vetor[i], vetor[i] + localMaximum)) === (i + localMaximum)) {
            finish += 1
        }
    }
    return localMaximum
}
console.log(subArraysum(vetor))