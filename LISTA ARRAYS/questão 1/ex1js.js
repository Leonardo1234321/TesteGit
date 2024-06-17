let vetor = [1,2,3,4,5,6,7,8,9,10,11]
const tamanho = vetor.length
function reverse(vetor, leng){
    for (i = 0; i < leng/2; i ++) {
        let temp1 = vetor[i]
        let temp2 = vetor[vetor.length - i - 1]
        vetor[i] = temp2
        vetor[vetor.length - i - 1] = temp1   
    }
    return vetor
}
console.log(reverse(vetor, tamanho))
