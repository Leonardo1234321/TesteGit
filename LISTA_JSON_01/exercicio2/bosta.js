async function fetchData() {
    try {
        // Busca os usuários
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await usersResponse.json();

        // Busca os posts
        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await postsResponse.json();

        // Busca os comentários do primeiro post
        const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${data[0]["id"]}/comments`);
        const comments_string = await commentsResponse.json();

        // Obtém os detalhes do usuário, título e corpo do post
        let user_name = users[data[0]["userId"] - 1]["name"];
        let title = data[0]["title"];
        let body = data[0]["body"];
        var postID = data[0]["id"];

        // Exibe os dados
        console.log(comments_string);
    } catch (error) {
        // Trata os erros
    }
}

// Chama a função para iniciar o processo
fetchData();
