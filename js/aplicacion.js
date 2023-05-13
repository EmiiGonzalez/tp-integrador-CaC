import { validar } from "./validacion.js";
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", validar);
});
