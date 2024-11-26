import { Funcionario } from './Funcionario.js'
export class Gerente extends Funcionario {
    private bonus: number;
    constructor (bonus: number, nome: string, cargo: string, salario: number) {
        super(nome, cargo, salario);
        if (bonus < 0) {
            console.log('valor de Bônus inválido.')
            this.bonus = 0;
        }
        else {
        this.bonus = bonus;
        }
    }
    get Bonus(): number {
        return this.bonus;
    }

    set Bonus(valor: number) {
        if (valor<0) {
            console.log('Insira um valor válido de Bônus (>0)')
        }
        else {
            this.bonus = valor;
        }
    }

    descricao(): string {
        return `Nome: ${this.nome}, Cargo: Gerente de ${this.cargo}, Salario: ${this.salario}, Bonus: ${this.bonus}, Salario total: ${this.bonus + this.salario}`;
    }
}
