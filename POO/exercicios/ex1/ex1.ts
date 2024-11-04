class Livro {
    private titulo: string;
    private autor: string;
    private preco: number;

    constructor (tit: string, aut: string, pric: number) {
        this.titulo = tit;
        this.autor = aut;
        this.preco = pric;
    }

    public descricao(): string {
        return `${this.titulo}, produzido por ${this.autor}, pelo valor de ${this.preco}`
    }
}

let harryPotter = new Livro('Harry Potter', 'J. K. Rowling', 59.99)

console.log(harryPotter.descricao());
