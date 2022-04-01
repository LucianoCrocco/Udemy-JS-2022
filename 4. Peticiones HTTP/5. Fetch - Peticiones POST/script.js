/*
Fetch API
Las peticiones POST sirven para enviar datos y hacer incersiones en una API o en una base de datos o en algun sitio.
    Para hacer peticiones POST, fetch admite un segundo parámetro.
    Ejemplo básico de peticion POST.
    fetch(url,{
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            Cabeceras de información sobre lo que estamos enviando.
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
    const newPost = {
        title : "A new post",
        body : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        userId: 1
    }
    // console.log(newPost);
    // console.log(JSON.stringify(newPost));
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify(newPost),
    headers:{
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error))
});