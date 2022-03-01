/* Conseguir el elemento HTML a través de la API DOM */
const titleId = document.getElementById("title");
const nameId = document.getElementById("name");

console.log(titleId);
console.log(nameId);

/* Acceder y cambiar/setear un atributo especifico del elemento HTML recuerado */
console.log(nameId.getAttribute("type"));
console.log(nameId.getAttribute("placeholder"));
nameId.setAttribute("type", "text"); // Cambiar el tipo del input que ya estaba definido en HTML.
nameId.setAttribute("placeholder", "Ingrese su nombre"); //Setear un valor del atributo que no estaba definido en un principio en la etiqueta HTML.
console.log(nameId.getAttribute("type"));
console.log(nameId.getAttribute("placeholder"))

/* Agregar una clase a mi elemento HTML */
titleId.classList.add("main-title", "other-title");

console.log(titleId);
console.log(nameId);

/* Remover una clase a mi elemento HTML */
titleId.classList.remove("other-title");

/* Verificar que un elemento */ 
if(!titleId.classList.contains("other-title")){
    console.log("El remove funciono correctamente y quito la clase other-title. Tambien el contains funciono al comprobar que no existe la clase other-title.")
}

/* Remplazar una clase */
titleId.classList.replace("title", "main-title");

console.log(titleId);
console.log(nameId);

/* Cambiar el valor del HTML */
nameId.value = "Jorge";

console.log(titleId.textContent);
console.log(nameId.value);
