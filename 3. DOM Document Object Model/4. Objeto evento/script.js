const input = document.getElementById("input");
const form = document.getElementById("form");
const button = document.getElementById("button");
const gallery = document.getElementById("gallery");

input.addEventListener("keyup", (e) => console.log(e));

button.addEventListener("click", (e) => console.log(e.target));

gallery.addEventListener("click", (e) =>{
    console.log(e.target);
    if(!isNaN(e.target.textContent)){
        e.target.classList.add("red");
    }
})

//Puedo hacer que el formulario no se envie por default al clickear el boton. Evita su comportamiento por defecto.
form.addEventListener("submit", (e) => e.preventDefault());

//Puedo forzar el lanzamiento de un evento
gallery.click();