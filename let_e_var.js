// Primeira diferença entre var e let

var nome = 'Luiz';
var nome = 'Sales';

let nomeLet = 'Sales'; // Não podemos redeclarar uma variavel com let
//  let nomeLet = 'Luiz'; || Vai gera um erro -> já foi declarada

console.log(nome);
console.log(nomeLet);