async function exibirPremios() {
    const ano = document.getElementById('inputAno').value;
    const api_bruto = await fetch('https://api.nobelprize.org/v1/prize.json');
    const api_json = await api_bruto.json();
    const premios = api_json.prizes;
    document.getElementById('resultado').innerHTML = '';
    premios.forEach(premio => {
        if (premio.year === ano) {
            const categoria = document.createElement('h1');
            categoria.innerHTML = 'Categoria: ' + premio.category;

            document.getElementById('resultado').appendChild(categoria);

            const laureados = premio.laureates
            const laureados_doc = document.createElement('p');

            laureados_doc.innerHTML = '<b>Laureados:</b> ';
            laureados.forEach(laureado => {
                laureados_doc.innerHTML += `${laureado.firstname}, `
            });

            document.getElementById('resultado').appendChild(laureados_doc);

            const motivacao = premio.laureates[0].motivation;
            const motivacao_doc = document.createElement('p');
            motivacao_doc.innerHTML = `<b>Motivacao: </b> ${motivacao}`;
            
            document.getElementById('resultado').appendChild(motivacao_doc);
        }
    });
    
}