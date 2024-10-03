const data = [
    { name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
    { name: "João", age: 18, sallary: 1500, driverLicense: false },
    { name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
    { name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
    { name: "Érica", age: 16, sallary: 2000, driverLicense: false },
];

// 1- reverse (se necessário, você pode reverter o array aqui)

const reverseData = data.reverse();

console.log(reverseData);

// 2- find
const highSalary = 5000;

const maiorSalario = data.find((user) => user.sallary > highSalary);
console.log(maiorSalario); 

const lowSalary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);
console.log(lowSalary);

data[lowSalary].sallary += 700;

console.log(data);

// 4- Includes

const number = [1, 2, 3, 4, 5];

const possui4 = number.includes(4);
const naoPossui4 = !number.includes(4);

console.log(possui4);
console.log(naoPossui4);

// 5- Map

const licenses = data.map(user => user.driverLicense);
const possui = licenses.includes(true);

console.log(possui);
console.log(data);

// 6- Filter

const driver = data.filter((user) => user.driverLicense);

console.log(driver);

// 7- Reduce

const salariosReduce = data.reduce((totalSallary, user) => totalSallary += user.sallary, 0);

console.log(salariosReduce);

// 8- Foreach

const mostrarNome = (user) => {
    user.forEach(user => {
        console.log(`Ola, ${user.name}`)        
    });
}

mostrarNome(data);

// 9- Some

const possuiCNH = data.some((user) => user.driverLicense === true);

console.log(possuiCNH);

// 10 - Every

const haveName = data.every((user) => user.name)

console.log(haveName);

const goodSallary = data.every((user) => user.sallary >= 2000);

if (goodSallary) {
    console.log("Todos possuem um bom salário");
} else {
    console.log("Nem todos possuem um bom salário.");
}
