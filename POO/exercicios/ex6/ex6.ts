class contaBancaria {
    private saldo: number;
    private titular: string;

    constructor (sal: number, tit: string) {
        this.saldo = sal;
        this.titular = tit;
    }

    depositar(valor: number): void {
        if (valor<=0) {
            console.log('Coloque um valor não nulo e positivo');
        }
        else {
            this.saldo += valor;
            console.log('Depositado!');
        }
    }
    sacar(valor:number): void {
        if (valor<=0) {
            console.log('Coloque um valor não nulo e positivo');
        }
        else {
            this.saldo -= valor;
            console.log('Sacado!')
        }
    }
    get mostrarSaldo(): number {
        return this.saldo;
    }
}

let conta1 = new contaBancaria(1414, 'Leo');

