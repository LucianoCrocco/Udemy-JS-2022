/*
Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto
Códigos de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status
*/

const button = document.getElementById("button");

button.addEventListener("click", () => {
    let xhr; 
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    

    xhr.addEventListener("load", (data) => { // Con load sabemos que la petición a terminado. Despues indicamos en el metodo anonimo que hacer con esa información.
        const dataJSON = JSON.parse(data.target.response);
        
        const list = document.getElementById("list");
        for(let userInfo of dataJSON){
            const listItem = document.createElement("li");
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem);
        }

    }); 

    // xhr.addEventListener("load", eventoManejador);

    xhr.send();
});

// function eventoManejador(e){
//     console.log(e);
// }