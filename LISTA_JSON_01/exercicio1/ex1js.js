fetch("https://jsonplaceholder.typicode.com/users")
.then(responde => responde.json())
.then(users => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json())
        .then(data => {
            data.forEach(post => {
                let user_name = users[post["userId"] - 1]["name"];
                let title = post["title"];
                let body = post["body"];
                displayPosts(user_name, title, body);
            }
            )
        })
        .catch(error => displayError(error))
    }   
)
.catch(error => displayError(error))


function displayError(error) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}

function displayPosts(user, title, body) {
    const userList = document.getElementById('user-list');
    const post = document.createElement('div')
    post.innerHTML = `<h1>${title}</h1><br><p>${body}</p><br>${user}`;
    userList.appendChild(post)

};