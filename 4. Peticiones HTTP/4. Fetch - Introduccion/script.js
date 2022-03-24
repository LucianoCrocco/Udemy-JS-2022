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
    fetch("RUTA").then(MANEJO SI NO HUBO ERROR).catch(MANEJO SI HUBO ERROR);
    Ejemplo:
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById("list");
            const fragment = document.createDocumentFragment();
            for(const userInfo of res){
                const listElement = document.createElement("li");
                listElement.textContent = `${userInfo.id} - ${userInfo.name}`;
                fragment.appendChild(listElement);
            }
            list.appendChild(fragment);
        })
        .catch(error => console.log(error));
 */ 

const button = document.getElementById("button");

button.addEventListener("click", () => {
    //Comprobacion si el navegador soporta fetch
    /*if(window.fetch != undefined){ 
        console.log("Soporta fetch");
    } else {
        console.log("No soporta fetch");
    }*/

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) //Si resolvio procede a los then, sino hace el reject y pasa al catch.
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById("list");
            const fragment = document.createDocumentFragment();
            for(const userInfo of res){
                const listElement = document.createElement("li");
                listElement.textContent = `${userInfo.id} - ${userInfo.name}`;
                fragment.appendChild(listElement);
            }
            list.appendChild(fragment);
        })
        .catch(error => console.log(error));

});