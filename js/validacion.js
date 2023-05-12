export const validar = (input) =>{
    const tipoDeInput = input.dataset.tipo;
    const span = input.nextSibling;
    if(input.validity.valid){
        console.log(span);
        span.classList.add("input-message-error");
        span.innerHTML = "";
    }else {
        console.log(span);
        span.classList.remove("input-message-error");
        span.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    }
};

const mostrarMensajeDeError = (tipoDeInput, input) =>{
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if (input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })   
    return mensaje;
}