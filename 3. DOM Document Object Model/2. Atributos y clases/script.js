const titleId = document.getElementById("title");
const nameId = document.getElementById("name");

console.log(titleId);
console.log(nameId);

console.log(nameId.getAttribute("type"));
nameId.setAttribute("type", "name");
console.log(nameId.getAttribute("type"));

titleId.classList.add("main-title", "other-title");

console.log(titleId);
console.log(nameId);

titleId.classList.remove("other-title");

if(!titleId.classList.contains("other-title")){
    console.log("El remove funciono correctamente y quito la clase other-title. Tambien el contains funciono al comprobar que no existe la clase other-title.")
}

titleId.classList.replace("title", "main-title");

console.log(titleId);
console.log(nameId);

nameId.value = "Jorge";

console.log(titleId.textContent);
console.log(nameId.value);
