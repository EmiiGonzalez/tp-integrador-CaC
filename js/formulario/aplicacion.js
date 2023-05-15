import { validarFormulario } from "./validacion.js";
import { campos } from "./validacion.js";

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("input");
const toast = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)


const resetFormulario = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("campo-succes");
  });
  campos.email = false;
  campos.nombre = false;
};

export const valFormApp = () => {
  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });
  
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const control = campos.nombre && campos.email;
    var mensaje = document.querySelector("[data-=mensaje]");
    if (control) {
      formulario.reset();
      resetFormulario();
  
      document.querySelector(".toast-body").innerText = "Contacto enviado con exito!"
      mensaje.innerText = "";
      document.querySelector('[data-bs-dismiss="modal"]').click();
      toastBootstrap.show()

    } else {
      mensaje.innerText = "Complete correctamente los campos";
      mensaje.classList.add("text-error");
      setTimeout(() => {
        mensaje.innerText = "";
        mensaje.classList.remove("text-error");
      }, 5000);
    }
  });
}