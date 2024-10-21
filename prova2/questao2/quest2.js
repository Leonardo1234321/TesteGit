async function exibirFeriados(){
    const ano = document.querySelector("#inputAno").value;
    fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
    .then((response) => response.json())
    .then((dados) => {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = '';
        const titulo = document.createElement('h1');
        titulo.innerHTML = `Feriados nacionais de ${ano}`;
        const numFeriados = document.createElement("p")
        numFeriados.innerHTML = `Total de feriados: ${parseInt(Object.keys(dados).length) - 1}`
        resultado.appendChild(titulo);
        resultado.appendChild(numFeriados)
        let meses = {};
        const mesesNome = {
            '01': "Janeiro",
            '02': "Fevereiro",
            '03': "Março",
            '04': "Abril",
            '05': "Maio",
            '06': "Junho",
            '07': "Julho",
            '08': "Agosto",
            '09': "Setembro",
            '10': "Outubro",
            '11': "Novembro",
            '12': "Dezembro",
        }
        
        for (let i = 1; i <= 12; i++) {
            const mes_doc = document.createElement('div');
            if(i < 10){
                mes_doc.setAttribute('id', `${"0"+`${i}`}`);
                mes_doc.innerHTML = `<h1>${mesesNome["0"+`${i}`]}</h1>`;
                meses[`${"0"+`${i}`}`] = 0;
            }
            else {
                mes_doc.setAttribute('id', `${i}`);
                mes_doc.innerHTML = `<h1>${mesesNome[`${i}`]}</h1>`;
                meses[`${i}`] = 0;
            }
            
            resultado.appendChild(mes_doc);
        }
        dados.forEach((feriado) => {
            const data_feriado = feriado.date.split('-');
            const feriado_doc = document.createElement('p');
            feriado_doc.innerHTML = `${data_feriado[2]} - ${feriado.name}`;
            document.getElementById(data_feriado[1]).appendChild(feriado_doc);
        })
        for (let i = 1; i <= 12; i++){
            if (i < 10) {
                const parentElement = document.getElementById(`${"0"+`${i}`}`)
                const numberOfChildren = parentElement.children.length
                console.log(numberOfChildren)
                if (numberOfChildren == 1){
                    parentElement.innerHTML = ""
                }
            }
            else {
                const parentElement = document.getElementById(`${i}`)
                const numberOfChildren = parentElement.children.length;
                console.log(numberOfChildren)
                if (numberOfChildren == 1){
                    parentElement.innerHTML = ""
                }
            }
        }
    })
}
/*
const parentElement = document.getElementById("parent");

// Obtenha a quantidade de elementos filhos
const numberOfChildren = parentElement.children.length;

console.log(numberOfChildren); // Saída: 3
*/