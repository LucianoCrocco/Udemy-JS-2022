const title = document.getElementById("title");
console.log(title.textContent);
title.textContent = "DOM - Accediendo a nodos"
console.log(title.textContent);

const paragraph = document.querySelector(".paragraph")
const span = paragraph.querySelector("span");
console.log(span.textContent);

const paragraphs = document.querySelectorAll(".paragraph");
const paragraphsArray = Array.from(document.querySelectorAll(".paragraph")); //Convertir los nodos en un array
paragraphsArray.map(p => p.style.color = "blue");
paragraphs[0].style.color = "red"; //Mal, es para demostrar en el video