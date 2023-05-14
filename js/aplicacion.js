import { validarFormulario } from "./validacion.js";
import { campos } from "./validacion.js";

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

const resetFormulario = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("campo-succes");
  });
  campos.email = false;
  campos.nombre = false;
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const control = campos.nombre && campos.email;
  var mensaje = document.querySelector("[data-=mensaje]");
  if (control) {
    formulario.reset();
    resetFormulario();

    mensaje.classList.add("text-succes");
    mensaje.innerText = "Contacto enviado con exito!";
    setTimeout(() => {
      mensaje.classList.remove("text-succes");
      mensaje.innerText = "";
    }, 5000);
  } else {
    mensaje.innerText = "Complete correctamente los campos";
    mensaje.classList.add("text-error");
    setTimeout(() => {
      mensaje.innerText = "";
      mensaje.classList.remove("text-error");
    }, 5000);
  }
});
