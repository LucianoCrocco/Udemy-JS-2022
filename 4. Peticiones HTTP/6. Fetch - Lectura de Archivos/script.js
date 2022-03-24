const buttonImg = document.getElementById("button-img");
const buttonPdf = document.getElementById("button-pdf");

buttonImg.addEventListener("click", () => {
    fetch("./dog.jpg")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.blob()) //blob(): Binary Long Object
    .then(img => {
        document.getElementById("img").src = URL.createObjectURL(img);
        document.getElementById("img").alt = "Foto de Perro";
    })
    .catch(error => console.log(error))
})

buttonPdf.addEventListener("click", () => {
    fetch("./demo.pdf")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.blob()) //blob(): Binary Long Object
    .then(pdf => {
        document.getElementById("pdf").href = URL.createObjectURL(pdf);
        document.getElementById("pdf").alt = "PDF";
    })
    .catch(error => console.log(error))
})