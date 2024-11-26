"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.contaPoupanca = exports.contaCorrente = exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, saldo, saldoDevedor) {
        this.nome = nome;
        this.saldo = saldo;
        this.saldoDevedor = saldoDevedor;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Seu saldo \u00E9 R$".concat(this.saldo, " e seu saldo devedor \u00E9 R$").concat(this.saldoDevedor));
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
var contaCorrente = /** @class */ (function (_super) {
    __extends(contaCorrente, _super);
    function contaCorrente(nome, saldo, saldoDevedor, num_cartao, senha) {
        var _this = _super.call(this, nome, saldo, saldoDevedor) || this;
        _this._senha = senha;
        _this._num_cartao = num_cartao;
        return _this;
    }
    contaCorrente.prototype.calcularSaldo = function () {
        this.saldo -= this.saldoDevedor;
        this.saldoDevedor = 0;
    };
    Object.defineProperty(contaCorrente.prototype, "Alt_saldoDevedor", {
        set: function (valor) {
            if (valor > 0) {
                this.saldoDevedor += valor;
            }
            else {
                console.log('Insire um valor válido');
            }
        },
        enumerable: false,
        configurable: true
    });
    return contaCorrente;
}(ContaBancaria));
exports.contaCorrente = contaCorrente;
var contaPoupanca = /** @class */ (function (_super) {
    __extends(contaPoupanca, _super);
    function contaPoupanca(nome, saldo, saldoDevedor) {
        return _super.call(this, nome, saldo, saldoDevedor) || this;
    }
    contaPoupanca.prototype.calcularSaldo = function (time, taxa) {
        this.saldo = Math.round(this.saldo * (Math.pow((1 + taxa), time)));
        return this.saldo;
    };
    return contaPoupanca;
}(ContaBancaria));
exports.contaPoupanca = contaPoupanca;
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
