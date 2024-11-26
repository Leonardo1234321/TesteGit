export abstract class ContaBancaria {
    constructor(protected nome: string, protected saldo: number, protected saldoDevedor: number) {}

    abstract calcularSaldo(...any): any

    exibirSaldo(): void {
        console.log(`Seu saldo é R$${this.saldo} e seu saldo devedor é R$${this.saldoDevedor}`);
    }
}

export class contaCorrente extends ContaBancaria {
    private _senha: string;
    private _num_cartao: string;
    constructor(nome: string, saldo: number, saldoDevedor: number, num_cartao: string, senha: string) {
        super(nome, saldo, saldoDevedor);
        this._senha = senha;
        this._num_cartao = num_cartao
    }

    calcularSaldo(): void {
        this.saldo -= this.saldoDevedor;
        this.saldoDevedor = 0;
    }
    set Alt_saldoDevedor(valor: number){
        if (valor > 0) {
            this.saldoDevedor += valor;
        }
        else {
            console.log('Insire um valor válido')
        }
    }
}

export class contaPoupanca extends ContaBancaria {
    constructor(nome: string, saldo: number, saldoDevedor: number) {
        super(nome, saldo, saldoDevedor);
    }

    calcularSaldo(time: number, taxa: number): any {
        this.saldo = Math.round(this.saldo * ((1 + taxa) ** time));
        
        return this.saldo;
    }
}

/* // Criando várias contas correntes e poupança
const contas: ContaBancaria[] = [
    new contaCorrente("Alice", 5000, 1200),
    new contaCorrente("Bob", 3000, 800),
    new contaCorrente("Charlie", 10000, 2500),
    new contaPoupanca("Diana", 7000, 0),
    new contaPoupanca("Eve", 4000, 0),
    new contaPoupanca("Frank", 1500, 0),
];

// Exibindo os saldos iniciais
console.log("Saldos iniciais:");
contas.forEach(conta => conta.exibirSaldo());
console.log("");

// Calculando saldos e aplicando regras específicas
console.log("Após cálculos de saldo:");
contas.forEach(conta => {
    if (conta instanceof contaCorrente) {
        console.log(`${conta.calcularSaldo()} (Corrente)`);
    } else if (conta instanceof contaPoupanca) {
        // Aplicando rendimento de poupança para 12 meses com taxa de 0.5% (0.005)
        console.log(`${conta.calcularSaldo(12, 0.005)} (Poupança)`);
    }
});
console.log("");

// Exibindo saldos finais
console.log("Saldos finais:");
contas.forEach(conta => conta.exibirSaldo()); */