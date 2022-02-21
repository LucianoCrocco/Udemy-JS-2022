let maximo = 50;
let acumulador = 0;
let i;
for(i = 1; ; i++){
    acumulador += parseInt(prompt("Ingrese un numero: "));
    if(acumulador > 50){
        break;
    }
}

alert(`Cantidad de ingresos: ${i} - Número acumulado: ${acumulador}`);