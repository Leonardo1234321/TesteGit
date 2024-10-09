function submit_but(event) {
    event.preventDefault();
    const tel = document.getElementById('tel_num').value;
    const telregex = /\(\d{2}\) \d{5} \d{5}/g;
    const result = document.createElement('p');
    if (telregex.test(tel)) {
        result.innerHTML = 'Este é seu número: ' + tel;
        document.body.appendChild(result);
        return;
    }
    result.innerHTML = 'O telefone não está no formato correto ou está incompleto';
    document.body.appendChild(result);
    return;
}

function onfocusAutoComplete() {
    let current_tel = document.getElementById('tel_num').value;

    let occurs = 0;
    let tel_legth = current_tel.split('').forEach(element => {
        if (parseInt(element) && parseInt(element) != 0) {
            occurs ++;
        };
        console.log(occurs);
    })
    if (current_tel.length === 12) {
        current_tel = '(' + current_tel.slice(0, 2) + ') ' + current_tel.slice(2, 7) + ' ' + current_tel.slice(7);
        document.getElementById('tel_num').value = current_tel;
        return;
    };
    return;
}

document.getElementById('tel_num').addEventListener('focusout', (element) => onfocusAutoComplete(element));