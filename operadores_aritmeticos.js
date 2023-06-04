// Operadores aritmeticos

/*
    + -> Adição / concatenção
    - -> Subtração
    / -> Divisão
    * -> Multiplicação
    ** -> Potenciazação 
    % -> Resto da divisão
*/


let adicao1 = 5;
let adicao2 = 10;

console.log(adicao1 + adicao2); //  15; 

adicao1 = '5';
adicao2 = 10;

console.log(adicao1 + adicao2) // resultado será 510 por quê está concatenando;



// A mesma lógica serve para os outros operadores


// Resto da divisão retornar o valor que vai sobra da divisão ex:

const restoDivisão = 10;
const restoDivisao2 = 5;

console.log(restoDivisão % restoDivisao2); // Retornará 0 pois não sobrou nada!


// Predecencia dos operadores aritimeticos;

/* 

    ()
    **
    *
    /
    %
    +
    -

*/

// Operador de incrementação;
// ++ 

let contador = 1;

contador++; // Após 
// ++contador; <- também consegue fazer, PRÉ

console.log(contador); // o valor dela + 1

////////////////////////////////////////////


// Operador de declemento;

let contador1 = 1;
--contador1; // 0

console.log(contador1);



// Operadores de atribuição;


let contador3 = 2;

contador3 *= 2;

console.log(contador3);


// NaN - Not a number

// parseInt(inteiro), parseFloat(decimais) e Number(O JavaScript vai descobrir qual o type)

const nome = parseInt('sales');

console.log(nome * 5);



