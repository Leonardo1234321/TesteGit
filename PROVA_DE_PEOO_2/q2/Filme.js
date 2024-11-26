"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
var Filme = /** @class */ (function () {
    function Filme(titulo, diretor, anoLancamento, avaliacoes) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
        this.avaliacoes = avaliacoes;
    }
    Object.defineProperty(Filme.prototype, "Titulo", {
        get: function () {
            return this.titulo;
        },
        set: function (tit) {
            if (tit.length > 0) {
                this.titulo = tit;
            }
            else {
                console.log('Insira um título válido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "Diretor", {
        get: function () {
            return this.diretor;
        },
        set: function (dir) {
            if (dir.length > 0) {
                this.diretor = dir;
            }
            else {
                console.log('Insira um nome de diretor válido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "AnoLancamento", {
        get: function () {
            return this.anoLancamento;
        },
        set: function (ano) {
            if (ano >= 0) {
                this.anoLancamento = ano;
            }
            else {
                console.log('Insira um ano de lançamento válido');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "Avaliacoes", {
        get: function () {
            return this.avaliacoes;
        },
        enumerable: false,
        configurable: true
    });
    Filme.prototype.adicionarAvaliacao = function (nota) {
        if (1 <= nota && nota <= 5) {
            this.avaliacoes.push(nota);
        }
        else {
            console.log('Insira uma nota de avaliação válida');
        }
    };
    Filme.prototype.calcularMediaAvaliacoes = function () {
        var soma = this.avaliacoes.reduce(function (total, numero) {
            return total + numero;
        }, 0);
        var media = soma / (this.avaliacoes.length);
        return media;
    };
    return Filme;
}());
exports.Filme = Filme;
