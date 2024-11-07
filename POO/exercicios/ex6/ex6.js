var contaBancaria = /** @class */ (function () {
    function contaBancaria(sal, tit) {
        this.saldo = sal;
        this.titular = tit;
    }
    contaBancaria.prototype.depositar = function (valor) {
        if (valor <= 0) {
            console.log('Coloque um valor não nulo e positivo');
        }
        else {
            this.saldo += valor;
            console.log('Depositado!');
        }
    };
    contaBancaria.prototype.sacar = function (valor) {
        if (valor <= 0) {
            console.log('Coloque um valor não nulo e positivo');
        }
        else {
            this.saldo -= valor;
            console.log('Sacado!');
        }
    };
    Object.defineProperty(contaBancaria.prototype, "mostrarSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    return contaBancaria;
}());
var conta1 = new contaBancaria(1414, 'Leo');
