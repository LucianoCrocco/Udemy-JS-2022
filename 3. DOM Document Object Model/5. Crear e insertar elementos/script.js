//DOM - Crear e insertar elementos

/*
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendchild(element);

Añadir fragmentos de código: document.createDocumentFragment();
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");

// const itemList = document.createElement("li"); // Crear un elemento
// itemList.textContent = "Lunes"; // Escribir texto en un elemento
// daysList.appendChild(itemList); // Añadir un elemento al DOM

title.innerHTML = "DOM - <span>Crear e insertar elementos 1</span>"; // Escribir HTML en un elemento

// Tiene un problema: A cada vuelta del bucle estamos inyectando codigo HTML en el DOM. El DOM tiene aspecto de arbol de nodos, cada vez que inyectamos se esta redibujando ese arbol por completo, lo cual hace que sea ineficiente al gastar muchos recursos el navegador. 
// for(let day of days){
//     daysList.innerHTML += `<li>${day}</li>`;
// }

// Para evitar el inconveniente del for, se creo el document.createDocumentFragment(); asi no sobrecargamos el navegador al hacer este tipo de operaciones
let fragmentList = document.createDocumentFragment();
let itemList;
for(let day of days){
    itemList = document.createElement("li"); // Crear un elemento
    itemList.textContent = day; // Escribir texto en un elemento
    fragmentList.appendChild(itemList); // Añadir fragmentos de código
}
console.log(fragmentList);
daysList.appendChild(fragmentList); // Añado el fragmento del fragmento.


let fragmentSelect = document.createDocumentFragment();
for(let day of days){
    itemList = document.createElement("option");
    itemList.textContent = day;
    //itemList.value = day;
    itemList.setAttribute("value", day.toLowerCase());
    fragmentSelect.appendChild(itemList);
}
selectDays.appendChild(fragmentSelect);
console.log(fragmentSelect);