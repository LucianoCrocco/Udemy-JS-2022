let numero = parseInt(prompt("Ingrese un numero natural mayor a 1 para calcular es primo o no: "));
let flag = true;

for(let i = 2; i < numero; i++){
    if(numero % i === 0 && numero != i){
        flag = false;
        break;
    }
}
alert(flag ? `${numero} es primo ` : `${numero} no es primo `)