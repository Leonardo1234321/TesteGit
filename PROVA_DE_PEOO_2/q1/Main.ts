import { Empresa } from './Empresa.js'
import { Funcionario } from './Funcionario.js'
import { Gerente } from './Gerente.js'

let leo = new Funcionario('leoncio', 'programador backend', 400);
let gustavo = new Funcionario('gustavim', 'programador front', 500);
let arthur = new Funcionario('arthuzao', 'programador gamer', 1000);

let jurandy = new Gerente(1000, 'juranga', 'Análise de sistemas', 14000);
let Giva = new Gerente(4000, 'givanaldo', 'Diretor de vendas', 20000);

let lista = [leo, gustavo, arthur, jurandy, Giva];

let tech_solucoes = new Empresa('Tech Soluções', lista);

tech_solucoes.listarFuncionarios();

leo.aplicarAumento(10);
arthur.aplicarAumento(15);
jurandy.aplicarAumento(10);
Giva.Bonus = 6000;

tech_solucoes.listarFuncionarios();
