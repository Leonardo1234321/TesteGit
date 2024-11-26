interface Repositorio {
    objects: any[];
    adicionar(obj: any): void;
    remover(obj: any): void;
    buscar(obj: any): any;
}

class Livro {
    name: string;
    autor: string;
    preco: number;

    constructor (nm: string, au: string, pr: number) {
        this.name = nm;
        this.autor = au;
        this.preco = pr;
    };
}

class RepositorioDeLivros implements Repositorio {
    objects: Livro[];
    constructor (objs:Livro[]=[]) {
        this.objects = objs;
    };

    adicionar(liv: Livro): void {
        this.objects.push(liv);
    }

    remover(livName: string): void {
        for (let key of Object.keys(this.objects)) {

            if (livName === this.objects[key].name) {

                let keyNum: number = Number(key);
                this.objects.splice(keyNum);
            }
        }

    }
    buscar(id: number): Livro | undefined{
        if (0 <= id-1 && id-1 < this.objects.length) {
            return this.objects[id - 1];
        }
        console.log('Livro não encontrado!')
        return;
    }
}

let repolivros = new RepositorioDeLivros()
let fahrenheit = new Livro('fahrenheit 451', 'Vagabundo', 99.99);
repolivros.adicionar(fahrenheit)
console.log(repolivros.objects)
console.log(repolivros.buscar(1));
repolivros.remover('fahrenheit 451');
console.log(repolivros.objects);