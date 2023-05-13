export const validar = (input) =>{
    const elemento = input.target;
    const valorElemento = elemento.value.trim().length;
    const largoBoolean = valorElemento >= 3 && valorElemento <= 25
    const tipoDeInput = elemento.dataset.tipo;
    const span = elemento.nextElementSibling;
    console.log(elemento.validity.valid && largoBoolean);
    if(elemento.validity.valid && largoBoolean){
        elemento.classList.remove("campo-error")
        span.classList.remove("error")
        span.innerText  = "";
    }else {
        elemento.classList.add("campo-error")
        span.classList.add("error")
        span.innerText  = mostrarMensajeDeError(tipoDeInput, elemento);
    }
}

const tipoDeErrores = ["valueMissing", "typeMismatch"];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El formato del correo no es valido"
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