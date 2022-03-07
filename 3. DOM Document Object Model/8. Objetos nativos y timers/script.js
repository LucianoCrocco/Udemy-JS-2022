const button = document.getElementById("button");

/*
Objeto window - Es el objeto global, de él descienden directa o indirectamente todos los objetos.
Algunos ejemplos directos
    No se recomienda utilizarlas ya que son ventanas que pausan la carga/ejecucion de la pagina hasta que se resuelvan. Salvo casos concretos no se recomienda utilizar.
    alert() -> Genera un pop-up de alerta con un boton de aceptar.
    prompt() -> Genera un pop-up con un textbox para ingresar datos con un boton de aceptar y otro de cancelar. 
    confirm() -> Genera un pop-up que devuelve true si acepta y false si cancela. No puede ser rediseñado con CSS.
*/

// alert('Hola');
// let nombre = prompt('Escriba su nombre');
// console.log(nombre);

// if(confirm("Acepta?")){
//     alert("El usuario acepto");
// } else {
//     alert("El usuario no acepto");
// }

/*
Objeto console - Es el objeto que contiene la consola del navegador. Todos los navegadores tienen su propia consola.
https://developer.mozilla.org/es/docs/Web/API/Console
Algunos ejemplos
    console.log() -> Imprime información en consola.
    console.dir() -> A veces el navegador cambia la manera de mostrar la información y no nos deja desplegar las propiedades de, por ejemplo, un elementO.
    Para ello con el dir podemos obligar a que siempre aparezca de esa forma.
    console.error() -> Imprime mensajes de error.
    console.table() -> Imprime una tabla indice:valores.
*/

// const persona  = {
//     name : "Example",
//     age : 66,
//     email : "Example@mail.com"
// }

// console.log(button);
// console.dir(button);
// console.error("Error");
// console.table(persona);

/*
Objeto location - Es el objeto que contiene la barra de direcciones.
https://developer.mozilla.org/es/docs/Web/API/Location
Algunos ejemplos
    location.href -> Nos devuelve la dirección URL. Tambien nos sirve para cambiar el valor de la URL, ejemplo: location.href = "https://google.com"
    location.protocol -> Nos devuelve el protocolo de la pagina (http, https, etc).
    location.host -> Nos devuelve el dominio principal que estamos visualizando. A pesar de estar en una carpeta o un subdirectorio, nos da la localización principal del dominio siempre.
    location.pathname -> Lo contrario a host. Nos da la localización de donde estemos en el dominio.
    location.hash -> Es una forma de pasar parametros entre pagina, podemos utilizarlo para tener un solo HTML y en función del hash que pasemos cargar una información u otra.
    location.reload() -> Recarga la pagina.
*/
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash);

/*
Objeto history - Es el objeto que trabaja con el historial de la pestaña donde navegamos.
https://developer.mozilla.org/es/docs/DOM/Manipulado_el_historial_del_navegador
    back() -> Va hacia la pagina web anterior de la pestaña (Si existe).
    foward() -> Va hacia la pagina web posterior de la pestaña pestaña (Si existe).
    go(n|-n)  -> Positivo va a X cantidad posterior, negativo va -X cantidad anterior (Si existe).
    length -> Nos da la cantidad de paginas web que se abrieron en la pestaña.
*/

// Probar en una consola de desarrollo en una pestaña donde hayamos cargado varias paginas webs.

/*
Objeto date - Es el objeto permite trabajar con fechas y horas.
https://developer.mozilla.org/es/docs/JavaScript/Referencia/Objetos_globales/Date
https://www.w3schools.com/jsref/jsref_obj_date.asp
*/
const date = new Date();

// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date);


/*
Timers - Los timers nos permiten establecer que una función se ejecuta despues de X tiempo y automaticamente al leerla.
    Timeout:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    setTimeout(() => {code}, delay in miliseconds) - Hace que se ejecuta la función después del delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia).

    Interval:
    https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(() => {code}, delay in miliseconds) - Hace que se ejecute una función cada delay milisegundo. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia).
*/

// button.addEventListener("click", () => {
//     setTimeout(saludar, 1000);
// });

// const saludar = () => console.log("Saludar");


const saludarDos = setInterval(() => {
    console.log("Hola");
}, 1000)

button.addEventListener("click", () => clearInterval(saludarDos));