
const nombre = document.getElementById('nombre').value.trim();
const email = document.getElementById('email').value.trim();
const telefono = document.getElementById('telefono').value.trim();
const producto = document.getElementById('producto').value;
const genero = document.querySelector('input[name="genero"]:checked');
const mensaje = document.getElementById('mensaje').value.trim();

Form.addEventlistener("submit", e=>{
e.preventDefault()
let warnings = ""
let entrar = false
let RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
parrafo.innerHTML =""
if(nombre.value.length <6){
    warnings += "Nombre no es valido <br>"
    entrar = true
}
if(regexEmail.test(email.value)){
    warnings += "Email no es valido <br>"
    entrar = true
}
if(pass.value.length < 8){
    warnings += "Contraseña no es valido <br>"
    entrar = true
}
if (entrar){
    parrafo.innerHTML = warnings
}else
    {
        parrafo.innerHTML = "Enviado"
    }

}) 
