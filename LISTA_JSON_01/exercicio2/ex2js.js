fetch("https://jsonplaceholder.typicode.com/users")
.then(responde => responde.json())
.then(users => {
        fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json())
        .then(data => {
            var comments_string;
            await fetch(`https://jsonplaceholder.typicode.com/posts/${data[0]["id"]}/comments`)
            .then(comments => comments.json())
            .catch(error => displayError(error))
            .then(blob => comments_string = blob)
            let user_name = users[data[0]["userId"] - 1]["name"];
            let title = data[0]["title"];
            let body = data[0]["body"];
            var postID = data[0]["id"]
            displayPosts(user_name, title, body, postID);
        }
            )
        })
        .catch(error => displayError(error))
.catch(error => displayError(error))

fetch ("https://jsonplaceholder.typicode.com/comments")
.then(response => responde.json())
.then(comments => {
    let id_posts = await postID
})
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

function displayComments(postID)
