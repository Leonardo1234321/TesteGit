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
exports.Gerente = void 0;
var Funcionario_js_1 = require("./Funcionario.js");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(bonus, nome, cargo, salario) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        if (bonus < 0) {
            console.log('valor de Bônus inválido.');
            _this.bonus = 0;
        }
        else {
            _this.bonus = bonus;
        }
        return _this;
    }
    Object.defineProperty(Gerente.prototype, "Bonus", {
        get: function () {
            return this.bonus;
        },
        set: function (valor) {
            if (valor < 0) {
                console.log('Insira um valor válido de Bônus (>0)');
            }
            else {
                this.bonus = valor;
            }
        },
        enumerable: false,
        configurable: true
    });
    Gerente.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, ", Cargo: Gerente de ").concat(this.cargo, ", Salario: ").concat(this.salario, ", Bonus: ").concat(this.bonus, ", Salario total: ").concat(this.bonus + this.salario);
    };
    return Gerente;
}(Funcionario_js_1.Funcionario));
exports.Gerente = Gerente;
