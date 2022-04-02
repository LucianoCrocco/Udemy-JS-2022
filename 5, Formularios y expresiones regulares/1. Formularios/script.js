const form = document.getElementById('form');
const button = document.getElementById('submitButton');

const name = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
//const gender = document.getElementsByName("gender"); //OTRA FORMA DE CONSEGUIR EL CHECKED DE LOS RADIO INPUT
const terms = document.getElementById('terms');


const formValido = {
    name:false,
    email:false,
    gender:false,
    terms:false
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarCampos();
})

name.addEventListener("change", (e) =>{
    if(e.target.value.trim().length > 0){
        formValido.name = true;
    }
})

email.addEventListener("change", (e) =>{
    if(e.target.value.trim().length > 0){
        formValido.email = true;
    }
})

/* OTRA FORMA DE CONSEGUIR EL CHECKED DE LOS RADIO INPUT
for(let radio of gender){
    radio.addEventListener("click", (e) => {
        if(e.target.checked) {
            formValido.gender = true;
        }
    })
}*/

gender.addEventListener("click", (e) =>{
    if(e.target.checked == true){
        formValido.gender = true;
    }
})

terms.addEventListener("change", (e) =>{
    formValido.terms = e.target.checked;
    e.target.checked ? button.removeAttribute("disabled") : button.setAttribute("disabled", true);
})

function validarCampos(){
    //console.log (Object.values(formValido));
    const formValues = Object.values(formValido);
    const valid = formValues.findIndex(value => value == false);
    if(valid == -1){
        form.submit();
    } else {
        alert("Formulario no completado");
    }
}