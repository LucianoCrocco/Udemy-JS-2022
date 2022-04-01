const button = document.getElementById("button");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const parrafo = document.getElementById("contenido");
        parrafo.textContent = res;
    })
    .catch(error => console.log(error));
});