let numeros = new Array();
let cantidad = 3;
document.getElementById("numbers").innerHTML += "Numeros elegidos: ";

for(let i = 0; i< cantidad; i++){
    numeros[i] = prompt(`Ingrse el ${i+1}º número`);
    document.getElementById("numbers").innerHTML += ` ${numeros[i]}`;
}
let j = numeros[0];
let aux;

numeros.sort((a,b) => b-a);

document.getElementById("result").innerHTML = "Numeros ordenamos de mayor a menor: "
for(let i = 0; i< cantidad; i++){
    document.getElementById("result").innerHTML += ` ${numeros[i]}`; 
}