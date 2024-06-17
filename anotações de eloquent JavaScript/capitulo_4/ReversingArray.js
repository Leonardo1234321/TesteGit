const { performance } = require('perf_hooks');

var startTime = performance.now()
let veto = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
veto.reverse();
console.log(veto)
var endTime = performance.now()
console.log(`Call to reverse array took ${endTime - startTime} milliseconds`)
/*
function reverseArray(array) {
    let result = [];
    for (element of array) {
        result.unshift(element);
    };
    return result;
};
function reverseArrayInPlace(vetor) {
    for (i = 0; i < vetor.length/2; i ++) {
        let temp1 = vetor[i];
        let temp2 = vetor[vetor.length - i - 1];
        vetor[i] = temp2;
        vetor[vetor.length - i - 1] = temp1;
    };
    return 0;
};
*/
