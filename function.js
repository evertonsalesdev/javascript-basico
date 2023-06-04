// Funções


// definir um valor padrão para os parametro
function soma(x = 1, y = 1) {
    return (x + y) * x;
}


// criar uma função com varivel -> funcão anonima
const raizQuadrada = function (x) {
    return x ** 0.5;
};

console.log(raizQuadrada(16))


// arrow function

const divisao = (x, y) => {
    return x / y;
};

console.log(divisao(100, 4))
