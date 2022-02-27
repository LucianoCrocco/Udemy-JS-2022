const numbers = [12, 2, 3, 23, 43, 2, 3];
console.log(numbers);
console.log(...numbers);

//Enviar elementos de un array a una función
const addNumbers = (a, b, c )=> {
    console.log(a+b+c);
}
let numbersToAdd = [1, 2, 3];
addNumbers(...numbersToAdd);

//Añadir un array a otro array
let users = ['Javier', 'David', 'Rosa', 'Juan', 'Mercedes'];
let newUsers = ['Marta', 'Jaime', 'Lara'];
users.push(...newUsers);
console.log(...users);


//Copiar un array
const equipos = ['San Lorenzo', 'Boca', 'River'];
const equiposCopia = [...equipos];

console.log(equipos);

//Concatenar arrays
console.log(equipos.concat(equiposCopia)); // Una forma
console.log([...equipos, ...equiposCopia]); // Con Spread Operator

// Enviar un número indefinido de argumentos a una función (parámetros REST)
const restParams = (...numbers) => {
    console.log(numbers);
} 

restParams();
restParams(1,2,3,4,5,6);

// Librería Math

console.log(Math.max(1,2,3));
console.log(Math.max(...numbers));

// Elminar elementos duplicados - Utiliza Set como en Python, que no permite elementos duplicados

const unico = [1, 2, 3, 4, 6, 7, 8, 2, 3, 7];
console.log([... new Set(numbers)]);