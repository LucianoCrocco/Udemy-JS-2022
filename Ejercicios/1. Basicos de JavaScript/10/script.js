const vocales = ['A', 'E', 'I', 'O', 'U'];
let contadorVocales = 0;
let contadorConsonantes = 0;

let nombre = prompt("Ingrese su nombre");

for(let i = 0; i < nombre.length; i++){
    if(vocales.includes(nombre[i].toUpperCase())){
        contadorVocales++;
    } else {
        contadorConsonantes++;
    }
}

/*Otra forma
for(let letra of nombre.toLowerCase()){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        contadorVocales++;
    } else{
        contadorConsonantes++;
    }
}*/

alert(`El nombre ${nombre} contiene ${contadorVocales} vocales y ${contadorConsonantes} consonantes`);