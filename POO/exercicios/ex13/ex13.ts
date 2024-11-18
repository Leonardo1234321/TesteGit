class Conta {
    protected _saldo: number;

    constructor (saldo: number) {
        this._saldo = saldo;
    }

    public depositar(valor: number): void {
        this._saldo += valor;
        console.log('Depositations!')
    }

    get saldo(): number{ return this._saldo}

    set saldo(valor: number) { 
        if (isNaN(valor)) {
            console.log('Digite um valor válido!') 
        }
        else {
            this._saldo = valor;
        }
    }
}

class ContaPoupanca extends Conta {
    private _taxa: number;

    constructor (saldo: number, taxa: number) {
        super(saldo);
        this._taxa = taxa;
    }

    public depositar(valor: number): void {
        this._saldo += valor * (1 - (this._taxa / 100))
    }
}

let leo = new Conta(1000);

let leo_poupanca = new ContaPoupanca(1000, 10);