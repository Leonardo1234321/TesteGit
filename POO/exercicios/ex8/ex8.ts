class Funcionario {
    name: string;
    protected salario: number;

    constructor (nam: string, sal: number) {
        this.name = nam;
        this.salario = sal;
    }

}

class Desenvolvedor extends Funcionario {
    nivel: string | undefined;
    
    constructor(nam: string, sal: number, niv?:string) {
        super(nam, sal)

        this.nivel = niv ? niv : 'estagiario';
        this.promover(this.nivel);
    }

    promover(niv: string | string): void{
        switch(niv) {
            case 'estagiario':
                this.nivel = 'junior';
                this.salario *= 1.05;
                break;
            case 'junior':
                this.nivel = 'pleno';
                this.salario *= 1.20;
                break;
            case 'pleno':
                this.nivel = 'senior';
                this.salario *= 1.40;
            default: 
                console.log('nivel inexistente ou superior ao senior');
        }
    }

    get mostrar_salario() {
        return this.salario;
    }
}

let gustavo = new Desenvolvedor('GUSTAVO', 400);

