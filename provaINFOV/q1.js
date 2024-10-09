function submit(event) {
    event.preventDefault();
    const tel = document.getElementById('tel_num').value;
    const telregex = /\(\d{2}\) \d{5} \d{5}/g;
    const result = document.createElement('p');
    if (telregex.test(tel)) {
        result.innerHTML = 'Este é seu número: ' + tel;
        document.body.appendChild(result);
        return;
    }
    result.innerHTML = 'O telefone não está no formato correto';
    document.body.appendChild(result);
    return;
}