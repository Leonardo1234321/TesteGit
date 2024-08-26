function listar() {
    const users = document.getElementById('user_id').value;
    const url = `https://jsonplaceholder.typicode.com/users/${users}/todos`
    fetch(url)
    .then(dados => dados.json())
    .then(todos => listarTodos(todos, 'listas'))
    .catch(error => displayError(error, 'listas'))
};

function listarTodos(todos, tag) {
    document.getElementById(tag).innerHTML = ''
    const lista = document.createElement('ol');
    todos.forEach(element => {
        const item = document.createElement('li');
        let style = element.completed ? 'green' : 'red'
        item.innerHTML= `${element.userId} completed? <span style='color: ${style}'>${element.completed}</span><br><br>${element.title}<br><br>${element.id}`;
        lista.appendChild(item)
    })
    document.getElementById(tag).appendChild(lista);
}

function displayError(error, tag) {
    const userList = document.getElementById(tag);
    userList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
};