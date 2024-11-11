class Livro {
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


class biblioteca {
    private livros: Livro[];

    constructor (books:Livro[]=[]) {
        this.livros = books;
    }

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    get Livros(): Livro[] {
        return this.livros;
    }
}

let nisiaFloresta = new biblioteca();

let fahrenheit = new Livro('farenheit 451', 39.99, 'leo');

nisiaFloresta.adicionarLivro(fahrenheit)

console.log(nisiaFloresta.Livros)