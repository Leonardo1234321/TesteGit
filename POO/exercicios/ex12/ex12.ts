class Endereco {
    rua: string;
    cep: string;
    cidade: string;

    constructor (r: string, ce: string, cd: string) {
        this.rua = r;
        this.cep = ce;
        this.cidade = cd;
    }
}

class Pessoa {
    endereco: Endereco;
    nome: string;

    constructor (end: Endereco, nm: string) {
        this.endereco = end;
        this.nome = nm;
    }

    mostrarEndereco(): string {
        let str_endereco = '';
        for (let key of Object.keys(this.endereco)) {
            str_endereco += this.endereco[key] + ' '
        }
        return str_endereco;
    }
}

let casa = new Endereco('jose porra lopez', '123123123', 'parnareba');

let Leo = new Pessoa(casa, 'Leoncio');

console.log(Leo.mostrarEndereco());