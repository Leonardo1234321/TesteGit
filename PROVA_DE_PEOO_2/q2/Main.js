"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Catalogo_js_1 = require("./Catalogo.js");
var Filme_js_1 = require("./Filme.js");
function filtrarFilmesPorAno(filmes, ano) {
    var novalista = [];
    filmes.forEach(function (filme) {
        if (filme.AnoLancamento > ano) {
            novalista.push(filme);
        }
    });
    return novalista;
}
;
var f1 = new Filme_js_1.Filme('A Origem', 'Christopher Nolan', 2010, [5, 4]);
var f2 = new Filme_js_1.Filme('Interestelar', 'Christopher Nolan', 2014, [5, 5]);
var f3 = new Filme_js_1.Filme('Matrix', 'Lana e Lilly Wachowski', 1999, [4, 4]);
var f4 = new Filme_js_1.Filme('Pulp Fiction: Tempo de Violência', 'Quentin Tarantino', 1994, [5, 4]);
var f5 = new Filme_js_1.Filme('Duna', 'Denis Villeneuve', 2021, [5, 5]);
var filmes_filtrados = filtrarFilmesPorAno([f1, f2, f3, f4, f5], 2000);
filmes_filtrados.forEach(function (element) {
    console.log("Nome: ".concat(element.Titulo, ", Ano: ").concat(element.AnoLancamento));
});
var cat = new Catalogo_js_1.Catalogo([f1, f2, f3, f4, f5]);
cat.listarFilmes();
