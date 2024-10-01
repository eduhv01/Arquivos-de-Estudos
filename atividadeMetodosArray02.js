// 1- Método reverse():
//Dado o array const numeros = [10, 20, 30, 40, 50], use reverse() para inverter a ordem dos números.

const numeros = [10, 20, 30, 40, 50];

const numerosReverse = numeros.reverse();
console.log(numerosReverse);

// 2- Método find():
//Dado o array const temperaturas = [12, 18, 25, 30, 35], use find() para encontrar a primeira temperatura maior que 20.

const temperaturas = [12, 18, 25, 30, 35];

const temperaturaFind = temperaturas.find((user) => user > 20);
console.log(temperaturaFind);

// 3- Método includes():
//Dado o array const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador'], use includes() para verificar se a cidade "Salvador" está no array.

const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador'];

const cidadesIncludes = cidades.includes('Salvador');
console.log(cidadesIncludes);

// 4- Método map():
//Dado o array const notas = [5, 6, 7, 8], use map() para dobrar o valor de cada nota.

const notas = [5, 6, 7, 8];

const notasMap = notas.map((user) => user * 2);
console.log(notasMap)

// 5- Método filter():

//Dado o array const idades = [10, 18, 25, 14, 30, 16], use filter() para retornar apenas as idades maiores ou iguais a 18.

const idades = [10, 18, 25, 14, 30, 16];

const idadesFilter = idades.filter((user) => user >= 18);
console.log(idadesFilter);

// 6- Método reduce():
//Dado o array const valores = [100, 200, 300, 400], use reduce() para somar todos os valores.

const valores = [100, 200, 300, 400];

const valoresReduce = valores.reduce((valores, valoresAtuais) => valores + valoresAtuais, 0);
console.log(valoresReduce);

// 7- Método forEach():

//Dado o array const nomes = ['Pedro', 'Lucas', 'Maria', 'Ana'], use forEach() para exibir no console o nome de //cada pessoa com a mensagem "Nome: [nome]".

const nomes = ['Pedro', 'Lucas', 'Maria', 'Ana'];

const nomesForEach = nomes.forEach(user => {
    console.log(`Nome: ${user}`)
});

// 8- Método some():
//Dado o array const notas = [7, 6, 8, 9, 10], use some() para verificar se há alguma nota maior que 9.

const notas02 = [7, 6, 8, 9, 10];

const notasSome = notas02.some((user) => user > 9)
console.log(notasSome);

// 9 -Método every():
//Dado o array const notas = [7, 8, 6, 9, 10], use every() para verificar se todas as notas são maiores ou iguais a 6.

const notas03 = [7, 8, 6, 9, 10];

const notas03Every = notas03.every((user) => user >= 6);
console.log(notas03Every);