var vetor = [1,5,3,7,8,9,2,10,6,4,0];
document.querySelector("#resultado").innerHTML = vetor;
function sortCrescente(x) {
    let resultado = x.slice();  //slice cria uma cópia separada, pois associar a array a outro nome leva pra mesma coisa.
    let temp;
    let posFinal = resultado.length
    let trocou;
    while (posFinal > 1) {
        trocou = false;
        for (i = 0; i < (posFinal - 1); i++) {
            if (resultado[i] > resultado[i+1]) {
                temp = resultado[i];
                resultado[i] = resultado[i+1];
                resultado[i+1] = temp;
                trocou = true;
            }
        };
        if (! trocou) {
            break
        }
        posFinal -= 1;
    };
    return resultado;
};
function sortDecrescente(x) {
    let resultado = x.slice();  //slice cria uma cópia separada, pois associar a array a outro nome leva pra mesma coisa.
    let temp;
    let posFinal = resultado.length
    let trocou;
    while (posFinal > 1) {
        trocou = false;
        for (i = 0; i < (posFinal - 1); i++) {
            if (resultado[i] < resultado[i+1]) {
                temp = resultado[i];
                resultado[i] = resultado[i+1];
                resultado[i+1] = temp;
                trocou = true;
            }
        };
        if (! trocou) {
            break
        }
        posFinal -= 1;
    };
    return resultado;
};
//METODO DE ORDENAÇÃO BUBBLE SORT, NÃO É NECESSÁRIO MAS É LEGAL NO MOMENTO.
function ordenacao1() {
    let opcoes = document.getElementsByName("ordem");
    let opcao = 0;
    for (i = 0; i < opcoes.length; i ++) {
        if (opcoes[i].checked) {
            opcao = opcoes[i].value;
            console.log(opcao)
        }
    };
    if (opcao == 1) {
        vetor = sortCrescente(vetor);
        document.querySelector("#resultado").innerHTML = vetor;
    }
    else if (opcao == 2) {
        vetor = sortDecrescente(vetor);
        document.querySelector("#resultado").innerHTML = vetor;
    }
};
function ordenacao2() {
    let opcoes = document.getElementsByName("ordem");
    let opcao = 0;
    for (i = 0; i < opcoes.length; i ++) {
        if (opcoes[i].checked) {
            opcao = opcoes[i].value;
            console.log(opcao)
        }
    };
    if (opcao == 1) {
        vetor.sort(function (a, b) {
            return a - b;    
        });
        document.querySelector("#resultado").innerHTML = vetor;
    }
    else if (opcao == 2) {
        vetor.sort(function (a, b) {
            return b - a;    
        });
        document.querySelector("#resultado").innerHTML = vetor;
    }
}// O sort usa uma função que quando retorna < 0, faz o elemento a ir para atras de b, =0 mantem e >1 faz a ir para a frente de b