//Atividade 1: reverse
//Crie um array chamado letras com os valores ['a', 'b', 'c', 'd', 'e'].

const array01 = ['a', 'b', 'c', 'd', 'e'];

const array01Reverse = array01.reverse();
console.log(array01);

//Atividade 2: find
//Crie um array chamado numeros com os valores [10, 15, 20, 25, 30].
//Use o método find para encontrar o primeiro número que seja maior que 18.

const array02 = [10, 15, 20, 25, 30];

const array02Find = array02.find((user) => user > 18);
console.log(array02Find);

//Atividade 3: includes
//Crie um array chamado cidades com os valores ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador'].
//Verifique se o array inclui a cidade 'Curitiba' usando o método includes.
//Exiba o resultado da verificação no console (deve ser true ou false).

const array03 = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador'];

const array03Includes = array03.includes('Curitiba');
console.log(array03Includes);

//Atividade 4: map
//Crie um array chamado numeros com os valores [1, 2, 3, 4, 5].
//Use o método map para criar um novo array onde cada número seja multiplicado por 3.

const array04 = [1, 2, 3, 4, 5];

const array04Map = array04.map((user) => user * 3);
console.log(array04Map);

//ividade 5: filter
//Crie um array chamado idades com os valores [12, 25, 30, 19, 17, 21].
//Use o método filter para criar um novo array apenas com as idades maiores ou iguais a 18.

const idades = [12, 25, 30, 19, 17, 21];

const idadesFilter = idades.filter((user) => user >= 18);
console.log(idadesFilter);

//Atividade 6: reduce
//Crie um array chamado valores com os valores [10, 20, 30, 40, 50].
//Use o método reduce para calcular a soma de todos os elementos do array.

const valores = [10, 20, 30, 40, 50];

const array06Reduce = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(array06Reduce);

//Atividade 7: forEach
//Crie um array chamado nomes com os valores ['Ana', 'João', 'Carlos', 'Beatriz'].
//Use o método forEach para exibir cada nome no console, precedido pela palavra "Nome:"

const array07Nomes = ['Ana', 'João', 'Carlos', 'Beatriz'];

array07Nomes.forEach(user => {
    console.log(`Nome ${user}`)
});

console.log(array07Nomes);

//Atividade 8: some
//Crie um array chamado temperaturas com os valores [25, 18, 30, 35, 28].
//Use o método some para verificar se existe alguma temperatura maior que 33.
//Exiba o resultado da verificação no console (deve ser true ou false).

const temperaturas = [25, 18, 30, 35, 28];

const temperaturasSome = temperaturas.some((user) => user > 33);
console.log(temperaturasSome);

//Atividade 9: every
//Crie um array chamado notas com os valores [7, 8, 9, 6, 7.5].
//Use o método every para verificar se todas as notas são maiores ou iguais a 6.
//Exiba o resultado da verificação no console (deve ser true ou false).

const notas = [7, 8, 9, 6, 7.5];

const notasEvery = notas.every((user) => user >= 6);
console.log(notasEvery);