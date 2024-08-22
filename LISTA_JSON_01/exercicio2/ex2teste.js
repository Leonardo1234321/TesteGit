urls = [
    'https://jsonplaceholder.typicode.com/posts/'
];

async function postsappend() {
    let posts = await fetch(urls[0]);
    posts = await posts.json();

    const posthtml = document.getElementById('postagens');
    
    posts.forEach(post => {
        const option = new Option(post['title'], post['id']);
        posthtml.options[posthtml.options.length] = option;
    });
};

postsappend();