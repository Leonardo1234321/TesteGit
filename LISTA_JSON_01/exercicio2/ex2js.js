const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/users'
];
async function displayComments() {
    let comments = await fetch(urls[1]);
    comments = await comments.json();
    let post = await fetch(urls[0])
    post =  await post.json();
    let users = await fetch(urls[2]);
    users = await users.json();

    document.getElementById('comments-list').innerHTML = `${post['title']}<br><br>${post['body']}<br><br>${users[post['userId'] - 1]['name']}<br><br>`;

    comments.forEach(comment => {
        const comment_html = document.createElement('div');
        comment_html.innerHTML = `<b>${comment['name']}</b> ${comment['email']}<br><br>${comment['body']}`;
        document.getElementById('comments-list').appendChild(comment_html);
    });
};

displayComments();
