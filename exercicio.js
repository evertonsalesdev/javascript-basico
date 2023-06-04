// Exercicio, juntando tudo até agora!

const nome = 'Everton';
const sobrenome = 'Sales';
const idade = 21;
const peso = 75;
const altura = 1.73;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;



// template strings

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg'); // Jeito "NORMAL"
console.log(`tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`); // TEMPĹATE STRINGS
console.log(`${nome} nasceu em ${anoNascimento}.`); // TEMPLATE STRINGS
