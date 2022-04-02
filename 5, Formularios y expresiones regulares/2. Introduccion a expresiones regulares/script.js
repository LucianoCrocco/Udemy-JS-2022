/*
Son secuencias de caracteres que forman un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de carecteres u operaciones de sustitución.

Sintaxis:
    /patron/banderas
Banderas:
    i: ignore case. No diferencia entre mayusculas y minusculas.
    g: global. Busca la forma global, es decir, no se para después de la primera coincidencia.
*/

const texto = document.getElementById("texto");
const regEx = /lorem/gi;

console.log(regEx.test(texto.textContent));