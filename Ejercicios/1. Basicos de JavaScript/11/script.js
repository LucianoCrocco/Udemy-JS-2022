const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color = prompt("Ingrese el un color para saber si esta en la lista");

alert(colores.includes(color.toLowerCase()) ? `El color ${color} esta contenido en la lista` : `El color ${color} no esta contenido en la lista`);

/* Otra forma
if(colores.indexOf(color.toLowerCase()) != -1){
    console.log(`El color ${color} esta contenido en la lista`);
} else{
    console.log(`El color ${color} no esta contenido en la lista`);
}*/