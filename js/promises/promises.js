// Criação de promesssa

const myPromise = new Promise((resolve, reject) => {
    const nome = "Eduardo";
    if (nome === "Eduardo") {
        resolve('Usuário Eduardo encontrado.');
    } else {
        reject('O usuario Eduardo não foi encontrado');
    }
});

myPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error); 
});

//Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Beatriz";

    if (nome === "Beatriz") {
        resolve("Usuária Beatriz encontrada.");
    } else {
        reject('A usuaria Beatriz não foi encontrada' + error)
    }
});

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((StringModificada) => {
    console.log(StringModificada);
})

// Resolver promessas

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 ok!")
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    resolve("P2 ok!")
});

const p3 = new Promise((resolve, reject) => {
    resolve("P3 ok!")
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

setTimeout(() => {
    console.log("ola")
}, 5000);

// Várias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P4 ok!")
    }, 2000);
});

const p5 = new Promise((resolve, reject) => {
    resolve("P5 ok!")
});

const p6 = new Promise((resolve, reject) => {
    resolve("P6 ok!")
});

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'eduhv01';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'aplication/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(`O nome do usuário é ${data.name}`);
    console.log(`Já seu login é ${data.login}`)
    console.log(`Habita em ${data.location}`)
}).catch((erro) => {
    console.log(`Houve erro ${erro}`);
})