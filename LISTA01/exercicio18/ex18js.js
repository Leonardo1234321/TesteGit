function checar() {
    let numero = document.querySelector("#telefone").value;
    const telPatterns = [/^\+\d{1,3}\s\(\d{1,3}\)\s\d{3,5}\-\d{4}$/g, /^\+\d{1,3}\d{1,3}\d{3,5}\d{4}$/g, 
    /^\+\d{1,3}\s\d{1,3}\s\d{3,5}\s\d{4}$/g
    ];
    for (let x of telPatterns) {
        if (x.test(numero)) {
            return document.querySelector("#resultado").innerHTML = "Número de telefone válido"
        }
    };
    return document.querySelector("#resultado").innerHTML = "Insira um número de telefone válido"
};