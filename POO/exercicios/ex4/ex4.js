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
var Livro = /** @class */ (function () {
    function Livro(tit, prec, auth) {
        this.titulo = tit;
        this.preco = prec;
        this.autor = auth;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.setTitulo = function (name) {
        this.titulo = name;
    };
    Livro.prototype.getPreco = function () {
        return this.preco;
    };
    Livro.prototype.setPreco = function (age) {
        this.preco = age;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.setAutor = function (matri) {
        this.autor = matri;
    };
    Livro.prototype.descricao = function () {
        return "".concat(this.titulo, ", produzido por ").concat(this.autor, ", pelo valor de ").concat(this.preco);
    };
    return Livro;
}());
var LivroDigital = /** @class */ (function (_super) {
    __extends(LivroDigital, _super);
    function LivroDigital(tit, prec, auth, format) {
        var _this = _super.call(this, tit, prec, auth) || this;
        _this.formato = format;
        return _this;
    }
    LivroDigital.prototype.descricao = function () {
        return "".concat(this.titulo, ", produzido por ").concat(this.autor, ", pelo valor de ").concat(this.preco, ", DISPON\u00CDVEL NO FORMARTO: ").concat(this.formato);
    };
    return LivroDigital;
}(Livro));
var clubeDoLivroDosHomens = new LivroDigital('Clube do livro dos homens', 69.99, 'Vitória', 'PDF');
console.log(clubeDoLivroDosHomens.descricao());
