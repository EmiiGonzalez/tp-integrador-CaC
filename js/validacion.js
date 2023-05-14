const expresiones = {
  nombre: {
    regex: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    mensaje: "Por favor, introduce solo caracteres alfabéticos.",
  },
  email: {
    regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: "Ingrese una dirección de correo electrónico válida",
  },
};

export const campos = {
  nombre: false,
  email: false,
};

export const validarFormulario = (e) => {
  const elemento = e.target;
  const tipoDeInput = elemento.dataset.tipo;
  const inputValue = elemento.value.trim();
  const label = elemento.previousElementSibling;
  const span = elemento.nextElementSibling;
  const mensaje = expresiones[tipoDeInput].mensaje;

  if (expresiones[tipoDeInput].regex.test(inputValue)) {
    elemento.classList.remove("campo-error");
    span.classList.remove("text-error");
    label.classList.remove("text-error");
    elemento.classList.add("campo-succes");
    span.innerText = "";
    campos[tipoDeInput] = true;
  } else {
    elemento.classList.remove("campo-succes");
    elemento.classList.add("campo-error");
    span.classList.add("text-error");
    label.classList.add("text-error");
    span.innerText = mensaje;
    campos[tipoDeInput] = false;
  }
};
