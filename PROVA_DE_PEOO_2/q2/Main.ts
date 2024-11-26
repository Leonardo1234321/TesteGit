import { Catalogo } from './Catalogo.js';
import { Filme } from './Filme.js';

function filtrarFilmesPorAno(filmes: Filme[], ano: number): Filme[] {
    let novalista: Filme[] = [];
    filmes.forEach(filme => {
        if (filme.AnoLancamento > ano) {
            novalista.push(filme);
        }
    });
    return novalista;
};

let f1 = new Filme('A Origem', 'Christopher Nolan', 2010, [5, 4])
let f2 = new Filme('Interestelar', 'Christopher Nolan', 2014, [5, 5])
let f3 = new Filme('Matrix', 'Lana e Lilly Wachowski', 1999, [4,4])
let f4 = new Filme('Pulp Fiction: Tempo de Violência', 'Quentin Tarantino', 1994, [5,4])
let f5 = new Filme('Duna', 'Denis Villeneuve', 2021, [5,5])

let filmes_filtrados = filtrarFilmesPorAno([f1,f2,f3,f4,f5], 2000);
filmes_filtrados.forEach(element =>{
    console.log(`Nome: ${element.Titulo}, Ano: ${element.AnoLancamento}`);
})
let cat = new Catalogo([f1,f2,f3,f4,f5]);
cat.listarFilmes();