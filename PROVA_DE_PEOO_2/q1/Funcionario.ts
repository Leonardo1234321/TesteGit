export class Funcionario {
    protected nome: string;
    protected cargo: string;
    protected salario: number;

    constructor (nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    get Nome(): string {
        return this.nome;
    }

    get Cargo(): string {
        return this.cargo;
    }

    get Salario(): number {
        return this.salario;
    }

    set Nome(novoNome: string) {
        if (novoNome.length > 0) {
            this.nome = novoNome;
        }
        else {
            console.log('Insira um nome válido');
        }
    }
    set Cargo(novoCargo: string) {
        if (novoCargo.length > 0) {
            this.cargo = novoCargo;
        }
        else {
            console.log('Insira um nome válido');
        }
    }

    aplicarAumento(percentual: number): void {
        if (percentual <= 0) {
            console.log('Insira um percentual válido');
        }
        else {
            this.salario = this.salario * (1 + (percentual / 100))
        }
    }

    descricao(): string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salario: ${this.salario}`;
    }
}

