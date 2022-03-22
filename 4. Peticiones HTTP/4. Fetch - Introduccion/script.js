/*
Es el reemplazo moderno del objeto XMLHTTPRequest.
Fetch API
Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas. Básicamente y muy por encima lo que hace es encapsular y crear una promesa con sus callbacks.
También provee de un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncronica por la red.
Esta basado en Promesas, por lo cual tiene un response y un reject internos.
    Response tiene varios métodos: 
    arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
    blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente.
    clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
    formData: Se utiliza para leer los objetos FormData.
    json(): Convierte los archivos json en un objeto de JavaScript.
    text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8.

Fetch por defecto al ponerle una URL trabaja con el metodo GET
 */ 

const button = document.getElementById("button");

button.addEventListener("click", () => {
    /*if(window.fetch != undefined){ 
        console.log("Soporta fetch");
    } else {
        console.log("No soporta fetch");
    }*/

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => console.log(res))
        .catch(error => console.log(error));

});