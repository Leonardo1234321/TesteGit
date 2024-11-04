var Livro = /** @class */ (function () {
    function Livro(tit, aut, pric) {
        this.titulo = tit;
        this.autor = aut;
        this.preco = pric;
    }
    Livro.prototype.descricao = function () {
        return "".concat(this.titulo, ", produzido por ").concat(this.autor, ", pelo valor de ").concat(this.preco);
    };
    return Livro;
}());
var harryPotter = new Livro('Harry Potter', 'J. K. Rowling', 59.99);
console.log(harryPotter.descricao());
