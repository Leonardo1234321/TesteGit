"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex2_1 = require("../ex2/ex2");
var PagamentoComCartao = /** @class */ (function () {
    function PagamentoComCartao() {
    }
    PagamentoComCartao.prototype.realizarpagamento = function (valor, conta) {
        conta.Alt_saldoDevedor = 1000;
    };
    return PagamentoComCartao;
}());
var pedido = new PagamentoComCartao();
var leoConta = new ex2_1.contaCorrente("Leoncio", 5000, 1200, '123456-123', 'fudido1234¨&%');
leoConta.exibirSaldo();
leoConta.calcularSaldo();
leoConta.exibirSaldo();
pedido.realizarpagamento(1000, leoConta);
leoConta.calcularSaldo();
leoConta.exibirSaldo();
