class funcionario {
    nome: string;
    salario: number;

    constructor (nm: string, sal:number) {
        this.nome=nm;
        this.salario=sal;
    }
}

class gerente extends funcionario {
    bonus: number;
    
    constructor (nm: string, sal: number, bon: number) {
        super(nm, sal);
        this.bonus = bon;
    };

    calcularSalarioTotal(): number {
        return this.bonus + this.salario;
    }
}