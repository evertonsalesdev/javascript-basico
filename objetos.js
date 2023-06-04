// Object 

const pessoa1 = { // criando um objeto
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};


console.log(typeof pessoa1) // verificando se é um objeto

console.log(pessoa1.nome); // acessando a variavel "nome"


// Criar um função para criar objetos
// parametro
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

// argumento é o valor que é passado para o parametro
const pessoas = criaPessoa('Luiz', 'Barreto', 28)

console.log(pessoas.sobrenome)



const salaDeAula = {
    alunos: [
        {
            nome: 'Luiz',
            sobrenome: 'Sales',
            idade: 21,
        },
        {
            nome: 'Sales',
            sobrenome: 'Sales',
            idade: 25
        }
    ]
}

console.log(salaDeAula.alunos[1].nome)