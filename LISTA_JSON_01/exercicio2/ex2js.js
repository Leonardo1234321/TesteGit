fetch("https://jsonplaceholder.typicode.com/users")
.then(responde => responde.json())
.then(users => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json())
        .then(data => {
            var postID = data[0]["id"];
            fetch(`https://jsonplaceholder.typicode.com/posts`)
            
            let user_name = users[data[0]["userId"] - 1]["name"];
            let title = data[0]["title"];
            let body = data[0]["body"];
            console.log(comments_string)
            displayPosts(user_name, title, body, postID);
        }
            )
        })
        .catch(error => displayError(error))
.catch(error => displayError(error))

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

function displayComments(postID) {

}

