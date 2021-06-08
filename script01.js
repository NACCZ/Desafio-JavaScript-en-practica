// Escríbe aquí tu código
let form = document.getElementById("formulario");

function limpiar(){
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML  = "";
    document.querySelector(".resultado").innerHTML = "";
}
function exito() {
document.querySelector(".resultado").innerHTML =
  "Mensaje enviado con exito!";
}

function validar(nombre, asunto, mensaje) {
let validacion = true;
let expresion = /[a-zA-Z]\w+/;
if (nombre == "" || expresion.test(nombre) == false) {
  document.querySelector(".errorNombre").innerHTML =
    "El nombre es requerido y no debe contener números";
  validacion = false;
}
if (asunto == "" || expresion.test(asunto) == false) {
  document.querySelector(".errorAsunto").innerHTML =
    "El asunto es requerido y no debe contener números";
  validacion = false;
}
if (mensaje == "" || expresion.test(mensaje) == false) {
  document.querySelector(".errorMensaje").innerHTML =
    "El mensaje es requerido y no debe contener números";
  validacion = false;
}
return validacion;
}

form.addEventListener("submit", function (event) {
event.preventDefault();
limpiar();
let nombre = document.getElementById("nombre").value;
let asunto = document.getElementById("asunto").value;
let mensaje = document.getElementById("mensaje").value;

let resultado = validar(nombre, asunto, mensaje);

if (resultado == true) {
  exito();
}
});

 
