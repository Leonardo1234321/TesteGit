fetch("https://jsonplaceholder.typicode.com/users")
.then(responde => responde.json())
.then(users => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json())
        .then(data => {
            data.forEach(post => {
                let user_name = users[post["userId"] - 1]["name"];
                let title = post["title"];
                let body = post["body"];
                let postID = post["id"]
                displayPosts(user_name, title, body, postID);
            }
            )
        })
        .catch(error => displayError(error))
    }   
)
.catch(error => displayError(error))

fetch ()
function displayError(error) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = `<div class="error">Ocorreu um erro: ${error.message}</div>`;
}

function displayPosts(user, title, body, postID) {
    const userList = document.getElementById('user-list');
    let post = document.createElement('div');
    post.id = `${postID}`
    post.innerHTML = `<h1>${title}</h1><br><p>${body}</p><br>${user}`;
    userList.appendChild(post)

};
