let vetor = [1,2,-5,-9,-7,4,1,10,9,-8,3,4,-9,-2,7,5,-5,9,1,23,6,-90,2,1,-100,-1,-3,12,56,-20,-80,1,2,3,-9,60,1]
let soma_list = []
let subVetor_list = []
for (b = 0; b < vetor.length; b++){
    //o for b serve pra alterar a posição inicial depois de verificar todas as somas em um ponto inicial fixo
    for (i= 0; i < vetor.length; i++) {
        // o for i altera a posição final depois de verificar a soma de todos os elementos dado um inicial e final
        let sum = 0;
        for (a = b; a < vetor.length - i; a++) {
            //o for a soma todos os elementos, poderia ser resumido a um algum método de soma existente
            sum += vetor[a];
        };
        //adiciona a soma a lista e os devidos pontos de inicio e fim da subarray em outra lista
        soma_list.push(sum);
        subVetor_list.push([b, i])
    };
};
console.log(soma_list);
console.log(subVetor_list[11]);

//busca a maior soma 
let resultado = soma_list[0];
for (i = 0; i < soma_list.length - 1; i ++) { 
    if (soma_list[i] > resultado) {
        resultado = soma_list[i];
    }
};


console.log(soma_list.indexOf(resultado));
console.log(soma_list[soma_list.indexOf(resultado)])
//usa-se o indexof da lista de soma na lista de subArray pois elas foram adicionadas em sincronia
let comeco_fim = subVetor_list[soma_list.indexOf(resultado)]
console.log(subVetor_list[soma_list.indexOf(resultado)])
//converte o vetor de duas posições em um subvetor do inicial correspondente a maior soma
let subvetorfinal = vetor.slice(comeco_fim[0], vetor.length - comeco_fim[1])
console.log(subvetorfinal)

