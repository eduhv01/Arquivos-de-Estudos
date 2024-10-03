// 1- reverse(): Dado o array const letras = ['a', 'b', 'c', 'd', 'e'], utilize o método reverse() para inverter a ordem dos elementos e exiba o resultado no console.

const letras = ['a', 'b', 'c', 'd', 'e'];

const letrasReverse = letras.reverse();
console.log(letrasReverse);

// 2- find(): Dado o array const idades = [14, 21, 18, 30, 17], utilize o método find() para encontrar a primeira idade que seja maior ou igual a 20 e exiba o resultado no console.

const idades = [14, 21, 18, 30, 17];

const idadesFind = idades.find((user) => user >= 20);
console.log(idadesFind); 

// 3- includes(): Dado o array const frutas = ['banana', 'maçã', 'laranja', 'uva'], utilize o método includes() para verificar se o array contém a fruta 'maçã' e exiba o resultado no console.

const frutas = ['banana', 'maçã', 'laranja', 'uva'];

const frutasIncludes = frutas.includes('maçã');
console.log(frutasIncludes);

// 4- map(): Dado o array const numeros = [1, 2, 3, 4, 5], utilize o método map() para criar um novo array com os números multiplicados por 4 e exiba o resultado no console.

const numeros = [1, 2, 3, 4, 5];

const numerosMap = numeros.map((user) => user * 4);
console.log(numerosMap);

// 5- filter(): Dado o array const temperaturas = [15, 22, 30, 35, 10], utilize o método filter() para criar um novo array contendo apenas as temperaturas acima de 20 e exiba o resultado no console.

const temperaturas = [15, 22, 30, 35, 10];
const temperaturasFilter = temperaturas.filter((user) => user > 20);
console.log(temperaturasFilter);

// 6- reduce(): Dado o array const despesas = [200, 300, 150, 400], utilize o método reduce() para calcular o total das despesas e exiba o resultado no console.

const despesas = [200, 300, 150, 400];

const despesasReduce = despesas.reduce((valor, valorAtual) => valor + valorAtual, 0);
console.log(despesasReduce);

// 7- forEach(): Dado o array const cidades = ['Lisboa', 'Paris', 'Berlim', 'Madrid'], utilize o método forEach() para exibir cada cidade no formato "Cidade: [nome]" no console.

const cidades = ['Lisboa', 'Paris', 'Berlim', 'Madrid'];

const cidadesForeach = cidades.forEach(user => {
    console.log(`Ola: ${user}`)
});

// 8- some(): Dado o array const notas = [5, 6, 7, 8, 9], utilize o método some() para verificar se há alguma nota maior que 8 e exiba o resultado no console.

const notas = [5, 6, 7, 8, 9];

const notasSoma = notas.some((user) => user > 8);
console.log(notasSoma);

// 9- every(): Dado o array const notas2 = [7, 8, 9, 10, 6], utilize o método every() para verificar se todas as notas são maiores ou iguais a 5 e exiba o resultado no console.

const notas2 = [7, 8, 9, 10, 6];
const notas2Every = notas2.every((user)=> user >= 5);
console.log(notas2Every);

// Questão 1: Filtragem e Soma
//Dado o array notas = [5, 7, 8, 9, 10, 6, 4], faça o seguinte:

//Filtre as notas que são maiores ou iguais a 6.
//Utilize o método reduce para somar essas notas filtradas.

const notas3 = [5, 7, 8, 9, 10, 6, 4];

const filtrar = notas3.filter((user) => user >= 6);
const reduzindo = filtrar.reduce((valorFiltrar, valorAtual) => valorFiltrar + valorAtual, 0);

console.log(reduzindo);

//Questão 2: Média das Idades
//Dado o array de objetos pessoas = [{ nome: 'Ana', idade: 25 }, { nome: 'João', idade: 30 }, { nome: 'Maria', idade: 22 }, { nome: 'Carlos', idade: 18 }], faça o seguinte:

//Utilize o método map para extrair as idades das pessoas.
//Calcule a média das idades utilizando o método reduce.

const pessoas = [
    {nome: 'Ana', idade: 25},
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Carlos', idade: 18 },
];

const mapeando = pessoas.map(pessoas => pessoas.idade);
const calculandoMedia = mapeando.reduce((valorMapeando, atual) => valorMapeando + atual, 0);
const media = calculandoMedia / mapeando.length;

console.log(media);

const alunos = [
    { nome: 'Lucas', nota: 7.5 },
    { nome: 'Fernanda', nota: 8.0 },
    { nome: 'Thiago', nota: 9.0 },
    { nome: 'Juliana', nota: 6.5 },
];

const alunosMap = alunos.map(aluno => aluno.nota);
const somaNotas = alunosMap.reduce((notas, notasAtuais) => notas + notasAtuais, 0);
const mediaNotas = somaNotas / alunosMap.length;

console.log(mediaNotas);

const funcionariosHonda = [
    { nome: 'Ana', altura: 1.65 },
    { nome: 'Bruno', altura: 1.75 },
    { nome: 'Carlos', altura: 1.80 },
    { nome: 'Fernanda', altura: 1.60 },
];

const alturas = funcionariosHonda.map(alturaDoFuncionario => alturaDoFuncionario.altura);
const somaAlturas = alturas.reduce((altura01, altura02) => altura01 + altura02, 0);
const mediaAltura = somaAlturas / alturas. length;

console.log(mediaAltura);

const funcionarios = [
    { nome: 'Pedro', idade: 28 },
    { nome: 'Mariana', idade: 32 },
    { nome: 'Roberto', idade: 45 },
    { nome: 'Julia', idade: 29 },
];

const funcionariosMapeandoIdades = funcionarios.map(idadeDosFuncionarios => idadeDosFuncionarios.idade);
const calculadorDeIdades = funcionariosMapeandoIdades.reduce((idadeA, idadeB) => idadeA + idadeB);
const mediaIdades = calculadorDeIdades / funcionariosMapeandoIdades.length;

console.log(mediaIdades);