let numero = parseInt(prompt("Ingrese un numero natural para calcular su factorial: "));
let factorial = 1;

for(let i = Math.abs(numero) ; i > 1; i--){
    factorial *= i
}
alert( `El factorial de ${numero} es: ${factorial}`);