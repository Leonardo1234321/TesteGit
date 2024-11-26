import { Filme } from './Filme.js';

export class Catalogo {
    filmes: Filme[];

    constructor(filmes: Filme[]) {
        this.filmes = filmes;
    }
    adicionarFilme(filme: Filme): void {
        this.filmes.push(filme);
    }
    listarFilmes() {
        this.filmes.forEach(filme => {
            console.log(`Nome: ${filme.Titulo}, Diretor: ${filme.Diretor}, Ano de lancamento: ${filme.AnoLancamento}`);
            console.log(`Avaliações: ${filme.Avaliacoes}`);
        })
    }
}