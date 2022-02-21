let numeros = new Array();
let cantidad = 3;
document.getElementById("numbers").innerHTML += "Numeros elegidos: ";

for(let i = 0; i< cantidad; i++){
    numeros[i] = prompt(`Ingrese el ${i+1}º número`);
    document.getElementById("numbers").innerHTML += ` ${numeros[i]}`;
}
let j = numeros[0];
let aux;

//numeros.sort((a,b) => b-a);
//numeros.sort((a,b) => a-b);
numeros.sort((a,b) => ordenar(a,b))

document.getElementById("result").innerHTML = "Numeros ordenamos de mayor a menor: "
for(let i = 0; i< cantidad; i++){
    document.getElementById("result").innerHTML += ` ${numeros[i]}`; 
}

function ordenar(a, b){//Si quiero que sea de menor a mayor cambio el - al else if
    if(a > b){
        return -1;
    } else if (b > a){
        return 1;
    } else {
        return 0;
    }
}