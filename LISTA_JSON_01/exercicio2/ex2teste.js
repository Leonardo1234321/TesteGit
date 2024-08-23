urls = [
    'https://jsonplaceholder.typicode.com/posts/',
    'https://jsonplaceholder.typicode.com/comments/'
];

async function exibircomentarios(postID, id) {
    document.getElementById(id).innerHTML = '';
    const json_comments = await fetch(urls[1]).catch(error => displayError(error));
    const comments = await json_comments.json();
    comments.forEach(comment => {
        if (comment['postId'] == postID) {
            const comment_html = document.createElement('div');
            comment_html.innerHTML = `<b>${comment['name']}</b> ${comment['email']}<br><br>${comment['body']}`;
            document.getElementById(id).appendChild(comment_html);
        };
    });
};

async function postsappend() {
    const postagens = document.getElementById('postagens');
    let posts = await fetch(urls[0]).catch(error => displayError(error));
    posts = await posts.json().catch(error => displayError(error));

    const posthtml = document.getElementById('postagens');
    
    posts.forEach(post => {
        const option = new Option(post['title'], post['id']);
        posthtml.options[posthtml.options.length] = option;
    });

    postagens.addEventListener('change', (event) => {
        exibircomentarios(postagens.value, 'comentarios');
        // não é necessário o target pois só há a postagem com esse evento, mas é uma boa prática
    });
};
function displayError(error) {
    const userList = document.getElementById('postagens');
    userList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
};



postsappend();