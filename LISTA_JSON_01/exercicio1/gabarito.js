const url_posts = 'https://jsonplaceholder.typicode.com/posts';
const url_users = 'https://jsonplaceholder.typicode.com/users';
var users = ['*'];
async function processarusuarios() {
    await fetch(url_users)
        .then(response => response.json())
        .then(posts => criar_vetor(posts))
        .catch(error => displayError(error));
}

await processarusuarios();

function criar_vetor(jason) {
    for (let user of jason) {
        users.push(user.name);
    };
};

fetch(url_posts)
    .then(response => response.json())
    .then(posts => exibir_posts(posts))
    .catch(error => displayError(error));

function exibir_posts(posts) {
    let postagens = document.getElementById('user-list');
    postagens.innerHTML = '';
    for (let post of posts) {
        postagem = document.createElement('div');
        postagem.innerHTML = `<h1>#${post.id} ${post.title}</h1><p>${post.body}</p><p>${usuarios[post.userId]}</p>`;
        postagens.appendChild(postagem);
    };
    
};

function displayError(error) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}