/*
Son secuencias de caracteres que forman un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de carecteres u operaciones de sustitución.

Sintaxis:
    /patron/banderas
Banderas:
    i: ignore case. No diferencia entre mayusculas y minusculas.
    g: global. Busca la forma global, es decir, no se para después de la primera coincidencia.

Comodines:
    Sustitución: Define un comodin dentro del patrón. El símbolo es el ".". Si sabemos ciertas palabras dentro del patron pero otras no utilizamos el . que toma cualquier caracter. i..um toma tanto "ipsum" como "i$%um".
    Listado de caracteres válidos: Entre corchetes se pona una lista con los cáracteres válidos. [aeiou] Con esto tenemos todas las vocales. 
    Rangos: Entre corchetes si pones un guión entre dos caracteres establecemos un rango, utiliza la tabla ASCII. [a-z] Todas las letras minúsculas. 
    Mezcla entre rangos y listas: Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u".
    Cadenas completas: Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por una pipe. (lorem|amet) es válida para la palabra "lorem" y la palabra "amet".
    Escapar un caracter: Para que la expresion regular reconozca un caracter dentro de la cadena utilizamos \ anterior al caracter para que se lo reconozca como tal. Como en C en una cadena de caracteres.

Delimitadores:
    ^ Antes de este símbolo no puede haber nada.
    $ Después de este símbolo no puede haber nada.
    ^hola$ -> Antes de la h nada, despues de la a nada.

Cantidad:
    Llaves: Lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posible.
        {n} Se tiene que repetir n cantidad de veces.
        {n, m} Se tiene que repetir entre n y m veces, ambas incluidas.
        {n, } Se tiene que repetir como mínimo n veces.
        ^[a-zA-Z]{1,3}@{1}$ -> 1 a 3 letras con un @ obligatorio.
    Asterisco: Lo que está antes del asterisco puede estar, puede no estar, y se puede repetir. .*@*\..*
    Interrogación: Lo que está antes de la interrogación puede no estar, pero si está solo puede aparecer una vez. ^[ae]?$
    Operador más: Lo que está antes del + tiene que estar una vez como minimo A-[0-9]+


*/

const texto = document.getElementById("texto");
const regEx = /lorem/gi;
const regEx2 = RegExp("lorem", "gi");
const regEx3 = RegExp("/lorem/", "gi");

console.log(regEx.test(texto.textContent));
console.log(regEx2.test(texto.textContent));
console.log(regEx3.test(texto.textContent));