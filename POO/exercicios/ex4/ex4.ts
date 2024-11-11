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

class LivroDigital extends Livro {
    private formato: string;

    constructor (tit: string, prec: number, auth: string, format: string) {
        super(tit, prec, auth);
        this.formato = format;
    }

    public descricao(): string {
        return `${this.titulo}, produzido por ${this.autor}, pelo valor de ${this.preco}, DISPONÍVEL NO FORMARTO: ${this.formato}`
    }
}

let clubeDoLivroDosHomens = new LivroDigital('Clube do livro dos homens', 69.99, 'Vitória', 'PDF');

console.log(clubeDoLivroDosHomens.descricao());