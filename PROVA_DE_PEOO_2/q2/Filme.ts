export class Filme {
    private titulo: string;
    private diretor: string;
    private anoLancamento: number; 
    private avaliacoes: number[];

    constructor (titulo: string, diretor: string, anoLancamento: number, avaliacoes: number[]) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
        this.avaliacoes = avaliacoes;
    }
    
    get Titulo(): string {
        return this.titulo;
    }
    set Titulo(tit: string) {
        if (tit.length > 0) {
            this.titulo = tit;
        }
        else {
            console.log('Insira um título válido');
        }
    }
    get Diretor(): string {
        return this.diretor;
    }
    set Diretor(dir: string) {
        if (dir.length > 0) {
            this.diretor = dir;
        }
        else {
            console.log('Insira um nome de diretor válido');
        }
    }
    get AnoLancamento(): number {
        return this.anoLancamento;
    }
    set AnoLancamento(ano: number) {
        if (ano >= 0) {
            this.anoLancamento = ano;
        }
        else {
            console.log('Insira um ano de lançamento válido');
        }
    }

    get Avaliacoes(): number[] {
        return this.avaliacoes;
    }

    adicionarAvaliacao(nota: number):void {
        if (1 <= nota && nota <= 5) {
            this.avaliacoes.push(nota);
        }
        else {
            console.log('Insira uma nota de avaliação válida');
        }
    }
    calcularMediaAvaliacoes(): number {
        let soma = this.avaliacoes.reduce(function(total, numero) {
            return total + numero;
        }, 0)
        let media = soma / (this.avaliacoes.length);
        return media;
    }
}