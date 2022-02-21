let altura;
let base;
let radio;
const pi = Math.PI;
let figura = prompt("Calcular el area de un 'Triangulo', 'Rectangulo' o 'Circulo'.\nIngrese el nombre de la figura: ");
switch(figura){
    case 'Triangulo':
        altura = parseInt(prompt("Ingrese la altura: "));
        base = parseInt(prompt("Ingrese la base: "));
        alert(`Area de un triangulo: ${base * altura / 2}`);
        break;
    case 'Rectangulo':
        altura = parseInt(prompt("Ingrese la altura: "));
        base = parseInt(prompt("Ingrese la base: "));
        alert(`Area de un rectangulo: ${base * altura}`);
        break;
    case 'Circulo':
        radio = parseInt(prompt("Ingrese el radio: "));
        alert(`Area de un rectangulo: ${(pi * Math.pow(radio, 2)).toFixed(2)}`);
        break;
    default:
        alert("Ingreso una opción invalida.\nRecargue para volver a ingresar una figura");
        break;
}
