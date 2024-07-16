function main() {
    nome = document.getElementById('nome').value;
    preco = document.getElementById('preco').value;
    categoria = document.getElementById('category').value;
    descricao = document.getElementById('descricao').value;
    if (nome && preco && descricao) {
        return document.getElementById('tabela').innerHTML += 
        `
        <tr>
            <th>${nome}</th>
            <th>${preco}</th>
            <th>${categoria}</th>
            <th>${descricao}</th>
        </tr>
        `;
    } else {
        return document.getElementById('erro').innerHTML = 'preencha todos os campos do formulário';
    };
};