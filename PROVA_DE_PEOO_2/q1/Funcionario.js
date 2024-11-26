"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "Nome", {
        get: function () {
            return this.nome;
        },
        set: function (novoNome) {
            if (novoNome.length > 0) {
                this.nome = novoNome;
            }
            else {
                console.log('Insira um nome válido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "Cargo", {
        get: function () {
            return this.cargo;
        },
        set: function (novoCargo) {
            if (novoCargo.length > 0) {
                this.cargo = novoCargo;
            }
            else {
                console.log('Insira um nome válido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "Salario", {
        get: function () {
            return this.salario;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.aplicarAumento = function (percentual) {
        if (percentual <= 0) {
            console.log('Insira um percentual válido');
        }
        else {
            this.salario = this.salario * (1 + (percentual / 100));
        }
    };
    Funcionario.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Salario: ").concat(this.salario);
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
