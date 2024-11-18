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
var Conta = /** @class */ (function () {
    function Conta(saldo) {
        this._saldo = saldo;
    }
    Conta.prototype.depositar = function (valor) {
        this._saldo += valor;
        console.log('Depositations!');
    };
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () { return this._saldo; },
        set: function (valor) {
            if (isNaN(valor)) {
                console.log('Digite um valor válido!');
            }
            else {
                this._saldo = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(saldo, taxa) {
        var _this = _super.call(this, saldo) || this;
        _this._taxa = taxa;
        return _this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        this._saldo += valor * (1 - (this._taxa / 100));
    };
    return ContaPoupanca;
}(Conta));
var leo = new Conta(1000);
var leo_poupanca = new ContaPoupanca(1000, 10);
