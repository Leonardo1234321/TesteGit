"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, funcionarios) {
        this.nome = nome;
        this.funcionarios = funcionarios;
    }
    Empresa.prototype.adicionarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario);
    };
    Empresa.prototype.listarFuncionarios = function () {
        this.funcionarios.forEach(function (func) {
            console.log(func.descricao());
        });
    };
    Object.defineProperty(Empresa.prototype, "Nome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    return Empresa;
}());
exports.Empresa = Empresa;
