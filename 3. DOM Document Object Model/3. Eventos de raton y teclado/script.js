const button = document.getElementById("button");
const input = document.getElementById("input");

//button.addEventListener("click", () => alert("Un click"));
button.addEventListener("dblclick", () => alert("Click doble"));
button.addEventListener("mouseenter", () => button.classList.add("red"));
button.addEventListener("mouseleave", () => button.classList.remove("red"));
button.addEventListener("mousedown", () => console.log("Has pulsado en la caja"));
button.addEventListener("mouseup", () => console.log("Has dejado de pulsar en la caja"));
button.addEventListener("mousemove", () => console.log("Estas moviendo el raton dentro de la caja"));

input.addEventListener("keydown", () => console.log("Has pulsado una tecla"));
input.addEventListener("keyup", () => console.log("Has soltado una tecla"));
input.addEventListener("keypress", () => console.log("Estas pulsando una tecla"));