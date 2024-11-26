"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
var Catalogo = /** @class */ (function () {
    function Catalogo(filmes) {
        this.filmes = filmes;
    }
    Catalogo.prototype.adicionarFilme = function (filme) {
        this.filmes.push(filme);
    };
    Catalogo.prototype.listarFilmes = function () {
        this.filmes.forEach(function (filme) {
            console.log("Nome: ".concat(filme.Titulo, ", Diretor: ").concat(filme.Diretor, ", Ano de lancamento: ").concat(filme.AnoLancamento));
            console.log("Avalia\u00E7\u00F5es: ".concat(filme.Avaliacoes));
        });
    };
    return Catalogo;
}());
exports.Catalogo = Catalogo;
