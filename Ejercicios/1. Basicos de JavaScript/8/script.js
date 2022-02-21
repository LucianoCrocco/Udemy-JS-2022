const numeros = [10, 4, 5, 55, 3];
let arrayPares = new Array();
let arrayImpares = new Array();
let aux = 0;
let randomNumber;

for(let i = 0; i < numeros.length; i++){
    randomNumber =  randomIntFromInterval(1, 10);
    aux = numeros[i] * randomNumber;
    console.log(`${i} x ${randomNumber} = ${aux}`);
    if(aux % 2 === 0){
        arrayPares.push(aux);
    } else {
        arrayImpares.push(aux);
    }
}

console.log(arrayPares);
console.log(arrayImpares);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
