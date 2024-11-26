import { Funcionario } from './Funcionario.js'
import { Gerente } from './Gerente.js'
export class Empresa {
    private nome: string;
    private funcionarios: Funcionario[];
    constructor (nome:string, funcionarios: Funcionario[]) {
        this.nome = nome;
        this.funcionarios = funcionarios;
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    listarFuncionarios(): void {
        this.funcionarios.forEach(func => {
            console.log(func.descricao());
        })
    }

    get Nome (): string {
        return this.nome;
    }
}
