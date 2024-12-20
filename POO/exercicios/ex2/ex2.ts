export class Livro {
    protected titulo: string;
    protected preco: number;
    protected autor: string;

    constructor (tit: string, prec: number, auth: string) {
        this.titulo = tit;
        this.preco = prec;
        this.autor = auth;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(name: string) {
        this.titulo = name;
    }

    public getPreco(): number {
        return this.preco;
    }
    public setPreco(age: number) {
        this.preco = age;
    }

    public getAutor() {
        return this.autor;
    }
    public setAutor(matri: string) {
        this.autor = matri;
    }

    public descricao(): string {
        return `${this.titulo}, produzido por ${this.autor}, pelo valor de ${this.preco}`
    }
}

let harryPotter = new Livro('Harry Potter', 59.99, 'J. K. Rowling')
