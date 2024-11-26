import { contaCorrente } from "../ex2/ex2";

interface Pagamento {
    realizarpagamento(...params:any[])
}

class PagamentoComCartao implements Pagamento {
    realizarpagamento(valor: number, conta: contaCorrente): void {
        conta.Alt_saldoDevedor = 1000;
    }
}

let pedido = new PagamentoComCartao();
let leoConta = new contaCorrente("Leoncio", 5000, 1200, '123456-123', 'fudido1234¨&%');

leoConta.exibirSaldo();
leoConta.calcularSaldo();
leoConta.exibirSaldo();

pedido.realizarpagamento(1000, leoConta)

leoConta.calcularSaldo();

leoConta.exibirSaldo();