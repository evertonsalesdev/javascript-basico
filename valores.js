/*

Valores primitivos (imutáveis)-> string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados

Referência(mutável) -> array, object, function - Passados por referência

*/



// Valores copiados

// let a = 'A';
// let b = a; // copiando valor de a *Quando o valor for primitivo

// console.log(a, b)


//*******************************************************************************
//*******************************************************************************
//*******************************************************************************


// Passados por referência

let a = [1, 2, 3];
let b = a; // Está apontando pro mesmo lugar da memoria

console.log(a, b);


a.push(4);
a.unshift(5);

console.log(a, b);
